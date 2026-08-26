import React, { useEffect, useState } from "react";

const EDGE_STYLE = {
  evolution: {
    className: "edge-evolution",
    marker: "url(#arrow-cyan)",
  },
  "web-evolution": {
    className: "edge-web-evolution",
    marker: "url(#arrow-cyan)",
  },
  "release-evolution": {
    className: "edge-release-evolution",
    marker: "url(#arrow-purple)",
  },
  "model-evolution": {
    className: "edge-model-evolution",
    marker: "url(#arrow-purple)",
  },
  "data-pipeline": {
    className: "edge-data-pipeline",
    marker: "url(#arrow-green)",
  },
  dataset: {
    className: "edge-dataset",
    marker: "url(#arrow-green)",
  },
  "architectural-influence": {
    className: "edge-architectural-influence",
    marker: "url(#arrow-amber)",
  },
};

const getPoint = (element, containerRect, side) => {
  const rect = element.getBoundingClientRect();

  const centerX = rect.left - containerRect.left + rect.width / 2;

  const centerY = rect.top - containerRect.top + rect.height / 2;

  switch (side) {
    case "top":
      return {
        x: centerX,
        y: rect.top - containerRect.top,
      };

    case "bottom":
      return {
        x: centerX,
        y: rect.bottom - containerRect.top,
      };

    case "left":
      return {
        x: rect.left - containerRect.left,
        y: centerY,
      };

    case "right":
      return {
        x: rect.right - containerRect.left,
        y: centerY,
      };

    default:
      return {
        x: centerX,
        y: centerY,
      };
  }
};

const chooseSides = (sourceRect, targetRect) => {
  const sourceCenterX = sourceRect.left + sourceRect.width / 2;

  const sourceCenterY = sourceRect.top + sourceRect.height / 2;

  const targetCenterX = targetRect.left + targetRect.width / 2;

  const targetCenterY = targetRect.top + targetRect.height / 2;

  const dx = targetCenterX - sourceCenterX;
  const dy = targetCenterY - sourceCenterY;

  if (Math.abs(dx) > Math.abs(dy) * 1.25) {
    return dx >= 0 ? ["right", "left"] : ["left", "right"];
  }

  return dy >= 0 ? ["bottom", "top"] : ["top", "bottom"];
};

const buildPath = (start, end, startSide, endSide) => {
  const curve = 70;

  let c1 = { ...start };
  let c2 = { ...end };

  if (startSide === "top") c1.y -= curve;
  if (startSide === "bottom") c1.y += curve;
  if (startSide === "left") c1.x -= curve;
  if (startSide === "right") c1.x += curve;

  if (endSide === "top") c2.y -= curve;
  if (endSide === "bottom") c2.y += curve;
  if (endSide === "left") c2.x -= curve;
  if (endSide === "right") c2.x += curve;

  return `
    M ${start.x} ${start.y}
    C ${c1.x} ${c1.y},
      ${c2.x} ${c2.y},
      ${end.x} ${end.y}
  `;
};

const getRelationshipPath = (relationship, container) => {
  const source = container.querySelector(
    `[data-entity-id="${relationship.source}"]`,
  );

  const target = container.querySelector(
    `[data-entity-id="${relationship.target}"]`,
  );

  if (!source || !target) {
    return null;
  }

  const containerRect = container.getBoundingClientRect();

  const sourceRect = source.getBoundingClientRect();

  const targetRect = target.getBoundingClientRect();

  const [startSide, endSide] = chooseSides(sourceRect, targetRect);

  const start = getPoint(source, containerRect, startSide);

  const end = getPoint(target, containerRect, endSide);

  return {
    d: buildPath(start, end, startSide, endSide),
    start,
    end,
  };
};

const RelationshipLayer = ({ containerRef, relationships }) => {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    const updatePaths = () => {
      const container = containerRef?.current;

      if (!container) return;

      const nextPaths = relationships
        .map((relationship) => {
          const path = getRelationshipPath(relationship, container);

          if (!path) return null;

          return {
            relationship,
            ...path,
          };
        })
        .filter(Boolean);

      setPaths(nextPaths);
    };

    /*
     * Cards can change size after fonts/images/layout settle.
     */
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updatePaths);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const mutationObserver = new MutationObserver(() => {
      requestAnimationFrame(updatePaths);
    });

    if (containerRef.current) {
      mutationObserver.observe(containerRef.current, {
        subtree: true,
        childList: true,
        attributes: true,
      });
    }

    window.addEventListener("resize", updatePaths);
    window.addEventListener("scroll", updatePaths, {
      passive: true,
    });

    const firstFrame = requestAnimationFrame(updatePaths);

    return () => {
      cancelAnimationFrame(firstFrame);
      resizeObserver.disconnect();
      mutationObserver.disconnect();

      window.removeEventListener("resize", updatePaths);
      window.removeEventListener("scroll", updatePaths);
    };
  }, [containerRef, relationships]);

  return (
    <svg
      className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-visible"
      aria-hidden="true"
    >
      <defs>
        <marker
          id="arrow-cyan"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#22d3ee" />
        </marker>

        <marker
          id="arrow-purple"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#a78bfa" />
        </marker>

        <marker
          id="arrow-green"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#34d399" />
        </marker>

        <marker
          id="arrow-amber"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
        </marker>
      </defs>

      {paths.map(({ relationship, d }) => {
        const style = EDGE_STYLE[relationship.type] || EDGE_STYLE.evolution;

        return (
          <path
            key={relationship.id}
            d={d}
            className={style.className}
            markerEnd={style.marker}
            fill="none"
          />
        );
      })}
    </svg>
  );
};

export default RelationshipLayer;
