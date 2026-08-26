import React from 'react';

const ProjectCard = ({
  project,
  selected = false,
  className = '',
}) => {
  return (
    <article
      className={`
        w-60
        rounded-2xl
        border
        bg-slate-950/90
        backdrop-blur-xl
        transition-all
        duration-300
        ${
          selected
            ? 'border-cyan-300/80 shadow-[0_0_35px_rgba(34,211,238,0.25)]'
            : 'border-cyan-400/20 hover:border-cyan-400/60'
        }
        ${className}
      `}
    >
      <div className="p-5">

        <p className="text-[9px] font-mono uppercase tracking-[0.18em] text-cyan-400">
          Project
        </p>

        <h3 className="mt-1 text-lg font-bold text-white">
          {project.shortName || project.name}
        </h3>

        {project.statusLabel && (
          <p className="mt-1 text-[9px] font-mono text-gray-500">
            {project.statusLabel}
          </p>
        )}

        <p className="mt-3 text-xs leading-relaxed text-gray-400 line-clamp-3">
          {project.description}
        </p>

        {project.metrics?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.metrics.slice(0, 2).map((metric) => (
              <div
                key={`${metric.label}-${metric.value}`}
                className="px-2 py-1 rounded-lg bg-white/[0.03] border border-white/5"
              >
                <span className="text-sm font-bold text-cyan-300">
                  {metric.value}
                </span>

                <span className="ml-1 text-[9px] text-gray-500">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {project.category?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.category.slice(0, 3).map((category) => (
              <span
                key={category}
                className="px-2 py-1 rounded-md text-[9px] font-mono text-cyan-300 bg-cyan-400/5 border border-cyan-400/10"
              >
                {category}
              </span>
            ))}
          </div>
        )}

      </div>
    </article>
  );
};

export default ProjectCard;