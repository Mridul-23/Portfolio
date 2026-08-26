import React, { useMemo, useRef } from 'react';
import { motion } from 'framer-motion';

import ProjectCard from './ProjectCard';
import RelationshipLayer from './RelationshipLayer';

const TYPE_STYLES = {
  release: {
    eyebrow: 'Release',
    border: 'border-purple-400/20 hover:border-purple-400/60',
    eyebrowColor: 'text-purple-400',
    accent: 'bg-purple-400',
  },
  tag: {
    eyebrow: 'Tag',
    border: 'border-purple-400/20 hover:border-purple-400/60',
    eyebrowColor: 'text-purple-400',
    accent: 'bg-purple-400',
  },
  model: {
    eyebrow: 'Model',
    border: 'border-purple-400/20 hover:border-purple-400/60',
    eyebrowColor: 'text-purple-400',
    accent: 'bg-purple-400',
  },
  dataset: {
    eyebrow: 'Dataset',
    border: 'border-emerald-400/20 hover:border-emerald-400/60',
    eyebrowColor: 'text-emerald-400',
    accent: 'bg-emerald-400',
  },
};

const EntityCard = ({ record, onClick }) => {
  if (!record) return null;

  const { entity, entityType, owner } = record;

  if (entityType === 'project') {
    return (
      <button
        type="button"
        className="block w-full text-left focus:outline-none"
        onClick={onClick}
      >
        <ProjectCard project={entity} />
      </button>
    );
  }

  const typeKey =
    entityType === 'artifact'
      ? entity.artifactType || 'dataset'
      : entity.type || 'release';

  const style = TYPE_STYLES[typeKey] || TYPE_STYLES.release;

  return (
    <button
      type="button"
      className="block w-full text-left focus:outline-none"
      onClick={onClick}
    >
      <article
        className={`
          w-full max-w-[15rem] mx-auto
          rounded-2xl
          border
          bg-slate-950/90
          backdrop-blur-xl
          transition-all duration-300
          hover:-translate-y-0.5
          ${style.border}
        `}
      >
        <div className="p-5">
          <div className="flex items-center gap-2">
            <span
              className={`w-1.5 h-1.5 rounded-full ${style.accent}`}
            />

            <p
              className={`text-[9px] font-mono uppercase tracking-[0.18em] ${style.eyebrowColor}`}
            >
              {style.eyebrow}
            </p>
          </div>

          <h3 className="mt-2 text-lg font-bold text-white">
            {entity.tag || entity.shortName || entity.name}
          </h3>

          {owner && (
            <p className="mt-1 text-[9px] font-mono text-gray-500">
              {owner.shortName || owner.name}
            </p>
          )}

          {entity.statusLabel && (
            <p className="mt-2 text-[9px] font-mono text-gray-500">
              {entity.statusLabel}
            </p>
          )}

          <p className="mt-3 text-xs leading-relaxed text-gray-400 line-clamp-4">
            {entity.description}
          </p>

          {entity.current && (
            <span
              className={`
                inline-flex mt-4
                px-2 py-1
                rounded-full
                text-[9px] font-mono
                ${style.eyebrowColor}
                bg-white/[0.03]
                border border-white/10
              `}
            >
              Current
            </span>
          )}

          {entity.metrics?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {entity.metrics.slice(0, 2).map((metric) => (
                <div
                  key={`${metric.label}-${metric.value}`}
                  className="px-2 py-1 rounded-lg bg-white/[0.03] border border-white/5"
                >
                  <span className="text-sm font-bold text-emerald-300">
                    {metric.value}
                  </span>

                  <span className="ml-1 text-[9px] text-gray-500">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </article>
    </button>
  );
};

const EcosystemSection = ({
  ecosystem,
  entityIndex,
  visibleEntityIds,
  relationships,
  onEntityClick,
}) => {
  const sectionRef = useRef(null);
  const graphRef = useRef(null);

  const visibleRows = useMemo(
    () =>
      ecosystem.rows.map((row) => ({
        ...row,
        entities: row.entities.filter((id) =>
          visibleEntityIds.has(id)
        ),
      })),
    [ecosystem.rows, visibleEntityIds]
  );

  const hasVisibleEntities = visibleRows.some(
    (row) => row.entities.length > 0
  );

  if (!hasVisibleEntities) return null;

  return (
    <motion.section
      ref={sectionRef}
      className={`relative mb-24 ${ecosystem.className || ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
    >
      <div className="mb-8 relative z-20">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />

          <h2 className="text-xl md:text-2xl font-bold text-white font-['Space_Grotesk']">
            {ecosystem.title}
          </h2>
        </div>

        <p className="mt-2 ml-5 text-xs font-mono text-gray-500">
          {ecosystem.subtitle}
        </p>
      </div>

      <div ref={graphRef} className="relative">
        <RelationshipLayer
          containerRef={graphRef}
          relationships={relationships}
        />

        <div className="relative z-10">
          {visibleRows.map((row, rowIndex) => (
            <React.Fragment key={`${ecosystem.id}-row-${rowIndex}`}>
              <div className={row.className}>
                {row.entities.map((id) => {
                  const record = entityIndex.get(id);

                  if (!record) return null;

                  return (
                    <div
                      key={id}
                      data-entity-id={id}
                      className="relative w-full max-w-[15rem] mx-auto"
                    >
                      <EntityCard
                        record={record}
                        onClick={() => onEntityClick(id)}
                      />
                    </div>
                  );
                })}
              </div>

              {rowIndex < visibleRows.length - 1 && (
                <div aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EcosystemSection;
