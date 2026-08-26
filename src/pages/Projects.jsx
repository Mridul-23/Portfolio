import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import projects from "./../data/projects.json";
import projectRelationships from "./../data/projectRelationships.json";

import ProjectCard from "../components/projects/ProjectCard";
import ProjectDetails from "../components/projects/ProjectDetails";
import EcosystemSection from "../components/projects/EcosystemSection";

const buildEntityIndex = () => {
  const index = new Map();

  projects.forEach((project) => {
    index.set(project.id, {
      entity: project,
      entityType: project.type || "project",
      owner: null,
    });

    (project.releases || []).forEach((release) => {
      index.set(release.id, {
        entity: release,
        entityType: "release",
        owner: project,
      });
    });
  });

  return index;
};

/*
 * Presentation-only layout.
 *
 * IDs point into projects.json / projectRelationships.json.
 * No project facts are duplicated here.
 */
const ECOSYSTEMS = [
  {
    id: "anime",
    title: "Anime Ecosystem",
    subtitle: "Multi-branch evolution & data flow",
    className: "md:min-h-0",

    rows: [
      {
        className: "flex justify-center",
        entities: ["ani-spider"],
      },
      {
        className: "h-24 md:h-32",
        entities: [],
      },
      {
        className: "flex justify-center",
        entities: ["anime-archive"],
      },
      {
        className: "h-28 md:h-36",
        entities: [],
      },
      {
        className:
          "grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 items-start",
        entities: ["anirec", "anirec-w", "ani-verse-v1"],
      },
      {
        className: "h-28 md:h-36",
        entities: [],
      },
      {
        className: "flex justify-end pr-0 md:pr-[7%]",
        entities: ["ani-verse"],
      },
    ],
  },

  {
    id: "eka",
    title: "Agent Ecosystem",
    subtitle: "Direct workflow influence",
    className: "md:min-h-0",

    rows: [
      {
        className: "flex justify-center",
        entities: ["mini-langgraph-agents"],
      },
      {
        className: "h-24 md:h-32",
        entities: [],
      },
      {
        className:
          "grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 items-start",
        entities: ["eka-v1", "eka-v2", "eka"],
      },
    ],
  },

  {
    id: "thoughtnet",
    title: "ThoughtNet Ecosystem",
    subtitle: "Semantic system evolution",
    className: "md:min-h-0",

    rows: [
      {
        className:
          "grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 items-start",
        entities: ["thoughtnet-v1", "thoughtnet-v2", "thoughtnet"],
      },
    ],
  },

  {
    id: "signspeak",
    title: "SignSpeak Ecosystem",
    subtitle: "Model evolution",
    className: "md:min-h-0",

    rows: [
      {
        className:
          "grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 items-start",
        entities: [
          "signspeak-model-25",
          "signspeak-model-60-plus",
          "signspeak",
        ],
      },
    ],
  },
];

const ECOSYSTEM_ENTITY_IDS = new Set(
  ECOSYSTEMS.flatMap((ecosystem) =>
    ecosystem.rows.flatMap((row) => row.entities),
  ),
);

const EDGE_STYLE = {
  evolution: {
    className: "edge edge-evolution",
    marker: "arrow-cyan",
  },
  "web-evolution": {
    className: "edge edge-web-evolution",
    marker: "arrow-cyan",
  },
  "release-evolution": {
    className: "edge edge-release-evolution",
    marker: "arrow-purple",
  },
  "model-evolution": {
    className: "edge edge-model-evolution",
    marker: "arrow-purple",
  },
  "data-pipeline": {
    className: "edge edge-data-pipeline",
    marker: "arrow-green",
  },
  dataset: {
    className: "edge edge-dataset",
    marker: "arrow-green",
  },
  "architectural-influence": {
    className: "edge edge-architectural-influence",
    marker: "arrow-amber",
  },
};

const Projects = () => {
  const [selectedEntity, setSelectedEntity] = useState(null);

  const entityIndex = useMemo(() => buildEntityIndex(), []);

  const visibleProjects = projects;

  const visibleEntityIds = useMemo(() => {
    const ids = new Set();

    projects.forEach((project) => {
      ids.add(project.id);

      (project.releases || []).forEach((release) => {
        ids.add(release.id);
      });
    });

    return ids;
  }, []);

  const visibleRelationships = useMemo(
    () =>
      projectRelationships.filter(
        (relationship) =>
          visibleEntityIds.has(relationship.source) &&
          visibleEntityIds.has(relationship.target),
      ),
    [visibleEntityIds],
  );

  const connectedProjectIds = useMemo(() => {
    const ids = new Set();

    visibleRelationships.forEach((relationship) => {
      const source = entityIndex.get(relationship.source);
      const target = entityIndex.get(relationship.target);

      if (source) ids.add(source.owner?.id || source.entity.id);
      if (target) ids.add(target.owner?.id || target.entity.id);
    });

    /*
     * A project with releases is an ecosystem even if its release-chain
     * relationships have not yet been added to the relationship file.
     * The actual relationship renderer still only draws edges from JSON.
     */
    visibleProjects.forEach((project) => {
      if ((project.releases || []).length > 0) {
        ids.add(project.id);
      }
    });

    ECOSYSTEMS.forEach((ecosystem) => {
      ecosystem.rows.forEach((row) => {
        row.entities.forEach((id) => {
          const record = entityIndex.get(id);
          if (record) ids.add(record.owner?.id || record.entity.id);
        });
      });
    });

    return ids;
  }, [visibleRelationships, visibleProjects, entityIndex]);

  const standaloneProjects = useMemo(
    () =>
      visibleProjects.filter(
        (project) =>
          project.type === "project" && !connectedProjectIds.has(project.id),
      ),
    [visibleProjects, connectedProjectIds],
  );

  const handleEntityClick = (entityId) => {
    const record = entityIndex.get(entityId);

    if (!record) return;

    setSelectedEntity(record);
  };

  const visibleRelationshipsForGraph = useMemo(
    () =>
      visibleRelationships.filter(
        (relationship) =>
          ECOSYSTEM_ENTITY_IDS.has(relationship.source) &&
          ECOSYSTEM_ENTITY_IDS.has(relationship.target),
      ),
    [visibleRelationships],
  );

  return (
    <div className="min-h-screen pt-24 px-4 pb-16 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-mono text-sm text-cyan-400 mb-2">
            ~/portfolio/projects
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gradient font-['Space_Grotesk']">
            Projects
          </h1>

          <p className="max-w-2xl mt-4 text-gray-400">
            An evolving map of systems, experiments, tools, and ideas I have
            built over time.
          </p>
        </motion.header>

        {ECOSYSTEMS.map((ecosystem) => (
          <EcosystemSection
            key={ecosystem.id}
            ecosystem={ecosystem}
            entityIndex={entityIndex}
            visibleEntityIds={visibleEntityIds}
            relationships={visibleRelationshipsForGraph}
            onEntityClick={handleEntityClick}
          />
        ))}

        {standaloneProjects.length > 0 && (
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(167,139,250,0.7)]" />

                <h2 className="text-xl md:text-2xl font-bold text-white font-['Space_Grotesk']">
                  Other Projects
                </h2>
              </div>

              <p className="mt-2 ml-5 text-xs font-mono text-gray-500">
                Independent systems & experiments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {standaloneProjects.map((project, index) => (
                <motion.button
                  key={project.id}
                  type="button"
                  className="block w-full text-left focus:outline-none"
                  onClick={() => handleEntityClick(project.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <ProjectCard project={project} />
                </motion.button>
              ))}
            </div>
          </motion.section>
        )}

        <AnimatePresence>
          {selectedEntity && (
            <ProjectDetails
              key={selectedEntity.entity.id}
              entity={selectedEntity}
              onClose={() => setSelectedEntity(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
