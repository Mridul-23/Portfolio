import React, { useMemo, useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGithub,
  FiX,
} from "react-icons/fi";

/*
 * ProjectDetails
 *
 * Two deliberate modes:
 *
 * 1. Drawer
 *    - compact
 *    - vertically centered
 *    - roughly half-width on desktop
 *    - left-side expansion control
 *
 * 2. Fullscreen
 *    - uses the complete entity/project data available in projects.json
 *    - puzzle / constellation style information blocks
 *    - contract + close controls
 *
 * No project content is hardcoded here.
 */

const ProjectDetails = ({ entity, onClose }) => {
  const [expanded, setExpanded] = useState(false);

  if (!entity?.entity) return null;

  return (
    <AnimatePresence mode="wait">
      {!expanded ? (
        <ProjectDrawer key="project-drawer" entity={entity} onClose={onClose} onExpand={() => setExpanded(true)} />
      ) : (
        <ProjectFullscreen key="project-fullscreen" entity={entity} onClose={onClose} onContract={() => setExpanded(false)} />
      )}
    </AnimatePresence>
  );
};

/* ========================================================================= */
/* ENTITY HELPERS                                                            */
/* ========================================================================= */

const resolveEntity = (entity) => {
  const isRelease = entity.entityType === "release";

  const item = entity.entity;
  const project = isRelease ? entity.owner : item;

  return {
    isRelease,
    item,
    project,
    displayName: isRelease ? item?.tag : project?.shortName || project?.name,
  };
};

const getTypeLabel = ({ isRelease, item, project }) => {
  if (isRelease) {
    return item?.type || "Release";
  }

  if (project?.type === "artifact") {
    return project.artifactType || "Artifact";
  }

  return "Project";
};

const getStatus = ({ isRelease, item, project }) => {
  if (isRelease) {
    return item?.current ? "Current release" : "Release";
  }

  return project?.statusLabel || project?.status || null;
};

const getMedia = (project) => {
  if (!project?.assets) return [];

  const media = [];

  if (project.assets.preview) {
    media.push(project.assets.preview);
  }

  (project.assets.gallery || []).forEach((asset) => {
    if (asset && !media.includes(asset)) {
      media.push(asset);
    }
  });

  return media;
};

const getLinks = (links) => {
  if (!links) return [];

  return [
    links.github && {
      key: "github",
      label: "GitHub",
      href: links.github,
      icon: <FiGithub />,
    },
    links.live && {
      key: "live",
      label: "Live",
      href: links.live,
      icon: <FiExternalLink />,
    },
    links.kaggle && {
      key: "kaggle",
      label: "Kaggle",
      href: links.kaggle,
      icon: <FiExternalLink />,
    },
  ].filter(Boolean);
};

/* ========================================================================= */
/* DRAWER                                                                    */
/* ========================================================================= */

const ProjectDrawer = ({ entity, onClose, onExpand }) => {
  const resolved = resolveEntity(entity);

  if (!resolved.project) return null;

  const { isRelease, item, project, displayName } = resolved;

  const type = getTypeLabel(resolved);
  const status = getStatus(resolved);

  return (
    <motion.aside initial={{ opacity: 0, x: 36, scale: 0.985 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 36, scale: 0.985 }} transition={{
        type: "spring",
        stiffness: 300,
        damping: 28,
      }} className=" fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-[80] px-6 w-[min(520px,calc(100vw-2rem))] md:w-[min(48vw,620px)] max-h-[78vh] overflow-hidden rounded-3xl border border-white/10 bg-slate-800/50 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.55)] " >
      {/* =============================================================== */}
      {/* LEFT EXPAND TAB                                                 */}
      {/* =============================================================== */}

      <button type="button" onClick={onExpand} aria-label="Expand project details" title="Expand details" className=" absolute left-5 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-xl border border-white/10 bg-slate-900 text-gray-400 shadow-xl hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-slate-800 transition-all " >
        <FiChevronLeft size={17} />
      </button>

      {/* =============================================================== */}
      {/* HEADER                                                          */}
      {/* =============================================================== */}

      <div className=" flex items-start justify-between gap-4 px-6 py-5 border-b border-white/10 " >
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className=" w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] " />

            <span className=" text-[9px] font-mono uppercase tracking-[0.22em] text-cyan-400 " >
              {type}
            </span>
          </div>

          <h2 className=" text-2xl md:text-3xl font-bold tracking-tight text-white " >
            {displayName}
          </h2>

          {isRelease && (
            <p className=" mt-1 text-xs font-mono text-purple-300 " >
              {project.shortName || project.name}
            </p>
          )}
        </div>

        <button type="button" onClick={onClose} aria-label="Close project details" className=" shrink-0 w-9 h-9 flex items-center justify-center rounded-xl text-gray-500 border border-transparent hover:text-white hover:border-white/10 hover:bg-white/5 transition-all " >
          <FiX size={17} />
        </button>
      </div>

      {/* =============================================================== */}
      {/* COMPACT CONTENT                                                 */}
      {/* =============================================================== */}

      <div className="overflow-y-auto max-h-[calc(78vh-88px)] p-6">
        <DrawerHero resolved={resolved} status={status} />

        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 " >
          {project.metrics?.slice(0, 4).map((metric) => (
            <MiniMetric key={`${metric.label}-${metric.value}`} metric={metric} />
          ))}
        </div>

        {isRelease ? (
          <DrawerRelease release={item} />
        ) : (
          <DrawerProject project={project} />
        )}

        <div className="mt-6">
          <DrawerLinks links={project.links} />
        </div>
      </div>
    </motion.aside>
  );
};

const DrawerHero = ({ resolved, status }) => {
  const { isRelease, item, project } = resolved;

  const description = isRelease ? item.description : project.description;

  return (
    <div>
      {status && (
        <span className=" inline-flex px-2.5 py-1 rounded-full text-[9px] font-mono text-emerald-300 bg-emerald-400/10 border border-emerald-400/15 " >
          {status}
        </span>
      )}

      {description && (
        <p className=" mt-4 text-sm leading-7 text-gray-400 " >
          {description}
        </p>
      )}

      {isRelease && item.highlights?.length > 0 && (
        <div className="mt-5">
          <p className="detail-label">Key change</p>

          <p className="mt-2 text-sm text-gray-300 leading-6">
            {item.highlights[0]}
          </p>
        </div>
      )}
    </div>
  );
};

const DrawerProject = ({ project }) => (
  <>
    {project.highlights?.length > 0 && (
      <div className="mt-6">
        <p className="detail-label">Key points</p>

        <div className="mt-3 space-y-2">
          {project.highlights.slice(0, 3).map((highlight) => (
            <div key={highlight} className=" flex gap-2 text-xs leading-5 text-gray-400 " >
              <span className="text-cyan-400">+</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    )}

    {project.techStack?.length > 0 && (
      <div className="mt-6">
        <p className="detail-label">Stack</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.techStack.slice(0, 8).map((tech) => (
            <TechPill key={tech}>{tech}</TechPill>
          ))}
        </div>
      </div>
    )}

    {project.releases?.length > 0 && (
      <div className="mt-6">
        <p className="detail-label">Evolution</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.releases.map((release) => (
            <span key={release.id} className=" px-2.5 py-1.5 rounded-lg text-[10px] font-mono text-purple-300 bg-purple-400/5 border border-purple-400/10 " >
              {release.tag}
            </span>
          ))}
        </div>
      </div>
    )}
  </>
);

const DrawerRelease = ({ release }) => (
  <>
    {release.highlights?.length > 0 && (
      <div className="mt-6">
        <p className="detail-label">Changes</p>

        <div className="mt-3 space-y-2">
          {release.highlights.slice(0, 3).map((highlight) => (
            <div key={highlight} className=" flex gap-2 text-xs leading-5 text-gray-400 " >
              <span className="text-purple-400">+</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </>
);

const MiniMetric = ({ metric }) => (
  <div className=" rounded-2xl border border-white/5 bg-white/[0.025] px-4 py-3 " >
    <div className=" text-xl font-bold text-cyan-300 " >
      {metric.value}
    </div>

    <div className=" mt-1 text-[9px] font-mono uppercase tracking-wider text-gray-600 " >
      {metric.label}
    </div>
  </div>
);

/* ========================================================================= */
/* FULLSCREEN                                                                */
/* ========================================================================= */

const ProjectFullscreen = ({ entity, onClose, onContract }) => {
  const resolved = resolveEntity(entity);

  if (!resolved.project) return null;

  const { isRelease, item, project, displayName } = resolved;

  const type = getTypeLabel(resolved);
  const status = getStatus(resolved);
  const media = getMedia(project);
  const links = getLinks(project.links);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className=" fixed inset-0 z-[100] overflow-y-auto bg-[#14182b] text-white mt-5 " >
      {/* =============================================================== */}
      {/* BACKDROP GLOW                                                   */}
      {/* =============================================================== */}

      <div className=" pointer-events-none fixed inset-0 overflow-hidden " >
        <div className=" absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-400/[0.035] blur-3xl" />

        <div className=" absolute top-[45%] -left-40 w-[420px] h-[420px] rounded-full bg-purple-500/[0.025] blur-3xl" />
      </div>

      {/* =============================================================== */}
      {/* TOP CONTROLS                                                    */}
      {/* =============================================================== */}

      <div className=" fixed top-5 right-5 md:top-7 md:right-8 z-[200] mt-10 flex items-center gap-2 " >
        <button type="button" onClick={onContract} className=" inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-slate-950/90 backdrop-blur-xl text-[10px] font-mono uppercase tracking-wider text-gray-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-slate-900 transition-all " >
          <FiChevronRight size={14} />
          Contract
        </button>

        <button type="button" onClick={onClose} aria-label="Close project details" title="Close" className=" w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/90 backdrop-blur-xl text-gray-400 hover:text-white hover:border-red-400/40 hover:bg-red-400/10 transition-all " >
          <FiX size={20} />
        </button>
      </div>

      {/* =============================================================== */}
      {/* PUZZLE CANVAS                                                   */}
      {/* =============================================================== */}

      <main className=" relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16 " >
        {/* ============================================================= */}
        {/* HERO PIECE                                                     */}
        {/* ============================================================= */}

        <section className=" max-w-5xl mb-12 md:mb-16 " >
          <div className="flex items-center gap-3">
            <span className=" w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.75)] " />

            <span className=" text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400 " >
              {type}
            </span>
          </div>

          <h1 className=" mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.88] text-white " >
            {displayName}
          </h1>

          {isRelease && (
            <p className=" mt-4 text-sm font-mono text-purple-300 " >
              {project.shortName || project.name}
            </p>
          )}

          {status && (
            <div className="mt-5">
              <span className=" inline-flex px-3 py-1.5 rounded-full text-[10px] font-mono text-emerald-300 bg-emerald-400/10 border border-emerald-400/15 " >
                {status}
              </span>
            </div>
          )}

          {(isRelease ? item.description : project.description) && (
            <p className=" mt-7 max-w-3xl text-base md:text-lg leading-8 text-gray-400 " >
              {isRelease ? item.description : project.description}
            </p>
          )}
        </section>

        {/* ============================================================= */}
        {/* PUZZLE GRID                                                     */}
        {/* ============================================================= */}

        <div className=" grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-auto " >
          {/* ----------------------------------------------------------- */}
          {/* METRICS                                                      */}
          {/* ----------------------------------------------------------- */}

          {project.metrics?.length > 0 && (
            <PuzzlePiece className="md:col-span-5" eyebrow="Metrics" accent="cyan" >
              <div className=" grid grid-cols-2 gap-3 " >
                {project.metrics.map((metric) => (
                  <div key={`${metric.label}-${metric.value}`} className=" rounded-2xl bg-black/20 border border-white/5 p-4 " >
                    <div className=" text-3xl md:text-4xl font-bold text-cyan-300 " >
                      {metric.value}
                    </div>

                    <div className=" mt-2 text-[9px] font-mono uppercase tracking-wider text-gray-600 " >
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </PuzzlePiece>
          )}

          {/* ----------------------------------------------------------- */}
          {/* HIGHLIGHTS                                                    */}
          {/* ----------------------------------------------------------- */}

          {(isRelease ? item.highlights?.length : project.highlights?.length) >
            0 && (
            <PuzzlePiece className="md:col-span-7" eyebrow={isRelease ? "Release changes" : "Key highlights"} accent={isRelease ? "purple" : "cyan"} >
              <div className="grid gap-3">
                {(isRelease ? item.highlights : project.highlights).map(
                  (highlight, index) => (
                    <div key={highlight} className=" flex gap-3 items-start p-3 rounded-xl bg-white/[0.02] border border-white/5 " >
                      <span className=" shrink-0 mt-1 text-[10px] font-mono text-cyan-400 " >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className=" text-sm leading-6 text-gray-400 " >
                        {highlight}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </PuzzlePiece>
          )}

          {/* ----------------------------------------------------------- */}
          {/* TECH STACK                                                    */}
          {/* ----------------------------------------------------------- */}

          {project.techStack?.length > 0 && (
            <PuzzlePiece className="md:col-span-4" eyebrow="Technology" accent="cyan" >
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TechPill key={tech}>{tech}</TechPill>
                ))}
              </div>
            </PuzzlePiece>
          )}

          {/* ----------------------------------------------------------- */}
          {/* CATEGORIES                                                    */}
          {/* ----------------------------------------------------------- */}

          {project.category?.length > 0 && (
            <PuzzlePiece className="md:col-span-4" eyebrow="Domains" accent="purple" >
              <div className="flex flex-wrap gap-2">
                {project.category.map((category) => (
                  <span key={category} className=" px-3 py-1.5 rounded-lg text-[10px] font-mono text-purple-300 bg-purple-400/5 border border-purple-400/10 " >
                    {category}
                  </span>
                ))}
              </div>
            </PuzzlePiece>
          )}

          {/* ----------------------------------------------------------- */}
          {/* LICENSE                                                      */}
          {/* ----------------------------------------------------------- */}

          {project.license && (
            <PuzzlePiece className="md:col-span-4" eyebrow="License" accent="neutral" >
              <p className=" text-2xl font-mono text-gray-200 " >
                {project.license}
              </p>
            </PuzzlePiece>
          )}

          {/* ----------------------------------------------------------- */}
          {/* RELEASES                                                      */}
          {/* ----------------------------------------------------------- */}

          {project.releases?.length > 0 && (
            <PuzzlePiece className="md:col-span-7" eyebrow="Evolution" accent="purple" >
              <div className="space-y-3">
                {project.releases.map((release, index) => (
                  <div key={release.id} className=" relative grid grid-cols-[auto_1fr] gap-4 p-4 rounded-2xl border border-purple-400/10 bg-purple-400/[0.025] " >
                    <div className=" flex flex-col items-center " >
                      <span className=" flex items-center justify-center w-8 h-8 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-300 text-[9px] font-mono " >
                        {index + 1}
                      </span>

                      {index < project.releases.length - 1 && (
                        <span className=" w-px flex-1 mt-2 bg-purple-400/15 " />
                      )}
                    </div>

                    <div>
                      <div className=" flex items-center justify-between gap-3 " >
                        <h3 className=" text-base font-mono text-purple-300 " >
                          {release.tag}
                        </h3>

                        {release.current && (
                          <span className=" text-[8px] font-mono uppercase tracking-wider text-emerald-300 " >
                            Current
                          </span>
                        )}
                      </div>

                      {release.description && (
                        <p className=" mt-2 text-xs leading-6 text-gray-500 " >
                          {release.description}
                        </p>
                      )}

                      {release.highlights?.length > 0 && (
                        <div className=" mt-3 flex flex-wrap gap-1.5 " >
                          {release.highlights.map((highlight) => (
                            <span key={highlight} className=" px-2 py-1 rounded-md text-[9px] text-gray-500 bg-white/[0.025] border border-white/5 " >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </PuzzlePiece>
          )}

          {/* ----------------------------------------------------------- */}
          {/* CONTENTS                                                      */}
          {/* ----------------------------------------------------------- */}

          {project.contents?.length > 0 && (
            <PuzzlePiece className="md:col-span-5" eyebrow="Contents" accent="green" >
              <div className="space-y-2">
                {project.contents.map((content) => (
                  <div key={content} className=" flex items-center gap-3 px-3 py-2.5 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.025] " >
                    <span className=" w-1.5 h-1.5 rounded-full bg-emerald-400" />

                    <span className=" text-xs font-mono text-gray-400 " >
                      {content}
                    </span>
                  </div>
                ))}
              </div>
            </PuzzlePiece>
          )}

          {/* ----------------------------------------------------------- */}
          {/* MEDIA                                                        */}
          {/* ----------------------------------------------------------- */}

          {media.length > 0 && (
            <PuzzlePiece className="md:col-span-8" eyebrow="Latest Visuals" accent="cyan" >
              <MediaPuzzle media={media} name={displayName} />
            </PuzzlePiece>
          )}

          {/* ----------------------------------------------------------- */}
          {/* RESOURCES                                                     */}
          {/* ----------------------------------------------------------- */}

          {links.length > 0 && (
            <PuzzlePiece className="md:col-span-4" eyebrow="Resources" accent="neutral" >
              <div className="grid gap-2">
                {links.map((link) => (
                  <a key={link.key} href={link.href} target="_blank" rel="noopener noreferrer" className=" flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.025] text-sm text-gray-300 hover:text-cyan-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.025] transition-all " >
                    <span className="flex items-center gap-2">
                      {link.icon}
                      {link.label}
                    </span>

                    <FiExternalLink size={13} />
                  </a>
                ))}
              </div>
            </PuzzlePiece>
          )}
        </div>

        {/* ============================================================= */}
        {/* RELEASE-SPECIFIC OWNER CONTEXT                                */}
        {/* ============================================================= */}

        {isRelease && (
          <section className=" mt-6 p-5 rounded-3xl border border-white/5 bg-white/[0.015] " >
            <p className="detail-label">Parent project</p>

            <div className="mt-2 flex items-center gap-3">
              <span className=" w-2 h-2 rounded-full bg-cyan-400 " />

              <span className=" text-lg font-semibold text-white " >
                {project.shortName || project.name}
              </span>
            </div>
          </section>
        )}
      </main>
    </motion.div>
  );
};

/* ========================================================================= */
/* PUZZLE PIECE                                                             */
/* ========================================================================= */

const PuzzlePiece = ({
  children,
  className = "",
  eyebrow,
  accent = "cyan",
  noPadding = false,
}) => {
  const accentClass =
    {
      cyan: "text-cyan-400",
      purple: "text-purple-400",
      green: "text-emerald-400",
      neutral: "text-gray-500",
    }[accent] || "text-cyan-400";

  return (
    <section className={`
        relative
        overflow-hidden
        rounded-3xl

        border border-white/8
        bg-white/[0.018]

        shadow-[0_20px_70px_rgba(0,0,0,0.16)]

        ${className}
      `} >
      {/* Small corner notch / puzzle cue */}
      <div className=" absolute top-0 right-0 w-12 h-12 pointer-events-none " >
        <div className=" absolute top-0 right-0 w-12 h-px bg-white/10 " />

        <div className=" absolute top-0 right-0 w-px h-12 bg-white/10 " />
      </div>

      <div className={noPadding ? "" : "p-5 md:p-6"}>
        {eyebrow && (
          <p className={`
            mb-4
            text-[9px]
            font-mono
            uppercase
            tracking-[0.22em]
            ${accentClass}
          `} >
            {eyebrow}
          </p>
        )}

        {children}
      </div>
    </section>
  );
};

/* ========================================================================= */
/* MEDIA                                                                     */
/* ========================================================================= */

const MediaPuzzle = ({ media, name }) => {
  const [active, setActive] = useState(media[0]);
  const [fullscreen, setFullscreen] = useState(false);

  const activeIndex = media.indexOf(active);

  const previous = () => {
    setActive(media[(activeIndex - 1 + media.length) % media.length]);
  };

  const next = () => {
    setActive(media[(activeIndex + 1) % media.length]);
  };

  const openFullscreen = async () => {
    setFullscreen(true);

    try {
      await document.documentElement.requestFullscreen?.();
    } catch {}
  };

  const closeFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch {}

    setFullscreen(false);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setFullscreen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (!fullscreen) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        previous();
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }

      if (e.key === "Escape" && !document.fullscreenElement) {
        setFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [fullscreen, activeIndex, media]);

  const Viewer = ({ fullscreenMode = false }) => (
    <div
      className={fullscreenMode ? "fixed inset-0 z-[2147483647] w-screen h-screen bg-black flex items-center justify-center" : "relative aspect-video bg-slate-950 overflow-hidden"}
      onClick={fullscreenMode ? closeFullscreen : openFullscreen}
    >
      <img src={active} alt={`${name} preview`} className="w-full h-full object-contain" />

      {media.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              previous();
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white backdrop-blur-sm hover:bg-black/75 hover:border-cyan-400/50 transition-all"
          >
            <FiChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white backdrop-blur-sm hover:bg-black/75 hover:border-cyan-400/50 transition-all"
          >
            <FiChevronRight size={22} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-black/50 text-[10px] font-mono text-white/70 backdrop-blur-sm">
            {activeIndex + 1} / {media.length}
          </div>
        </>
      )}
    </div>
  );

  return (
    <div>
      <Viewer />

      <p className="text-xs font-light text-gray-300/50 text-center p-1.5 pb-4">
        Click the image to view it in full screen.
      </p>

      {media.length > 1 && (
        <div className="grid grid-cols-4 gap-2 p-3 border-t border-white/5">
          {media.map((asset) => (
            <button
              key={asset}
              type="button"
              onClick={() => setActive(asset)}
              className={`aspect-video overflow-hidden rounded-lg border ${active === asset ? "border-cyan-400/60" : "border-white/5"}`}
            >
              <img src={asset} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {fullscreen &&
        createPortal(
          <Viewer fullscreenMode />,
          document.body
        )}
    </div>
  );
};

/* ========================================================================= */
/* SMALL UI                                                                  */
/* ========================================================================= */

const TechPill = ({ children }) => (
  <span className=" px-2.5 py-1.5 rounded-lg text-[10px] font-mono text-cyan-300 bg-cyan-400/[0.04] border border-cyan-400/10 " >
    {children}
  </span>
);

const DrawerLinks = ({ links }) => {
  const items = getLinks(links);

  if (!items.length) return null;

  return (
    <div className=" flex flex-wrap gap-2 pt-5 border-t border-white/5 " >
      {items.map((link) => (
        <a key={link.key} href={link.href} target="_blank" rel="noopener noreferrer" className=" inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.025] text-[10px] font-mono text-gray-400 hover:text-cyan-300 hover:border-cyan-400/30 transition-all " >
          {link.icon}
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default ProjectDetails;
