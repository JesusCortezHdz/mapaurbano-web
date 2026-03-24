'use client';

import type { PointerEvent as ReactPointerEvent } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';

const optimizedPath =
  'M180 366 C 300 340, 390 306, 500 248 C 620 194, 720 198, 820 182 C 930 165, 1010 160, 1082 174';

const baselinePath =
  'M180 430 C 320 412, 395 395, 500 350 C 620 300, 715 298, 820 266 C 930 232, 995 238, 1080 225';

const bars = [
  { x: 220, y: 392, h: 118, cls: 'dav-b1' },
  { x: 340, y: 344, h: 166, cls: 'dav-b2' },
  { x: 460, y: 298, h: 212, cls: 'dav-b3' },
  { x: 580, y: 266, h: 244, cls: 'dav-b4' },
  { x: 700, y: 246, h: 264, cls: 'dav-b5' },
  { x: 820, y: 232, h: 278, cls: 'dav-b6' },
  { x: 940, y: 242, h: 268, cls: 'dav-b7' },
];

export function DataAnalyticsMiniViz() {
  const reduceMotion = useReducedMotion();

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);

  const rotateX = useSpring(rotateXRaw, {
    stiffness: 120,
    damping: 22,
    mass: 0.8,
  });

  const rotateY = useSpring(rotateYRaw, {
    stiffness: 120,
    damping: 22,
    mass: 0.8,
  });

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
  if (reduceMotion) return;

  const bounds = event.currentTarget.getBoundingClientRect();
  const px = (event.clientX - bounds.left) / bounds.width;
  const py = (event.clientY - bounds.top) / bounds.height;

  rotateYRaw.set((px - 0.5) * 3.5);
  rotateXRaw.set((0.5 - py) * 2.8);
}

  function handlePointerLeave() {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  }

  return (
    <motion.div
      className="relative w-full aspect-[1.33/1] sm:aspect-[1.55/1] md:aspect-[1.95/1]"
      style={
        reduceMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1400,
            }
      }
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="absolute -inset-5 rounded-[2rem] bg-[radial-gradient(circle_at_68%_26%,rgba(47,111,237,0.12),transparent_38%,rgba(255,107,74,0.05)_66%,transparent_80%)] blur-3xl opacity-90" />

      <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-[#172734]/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.56),rgba(255,255,255,0.26))] shadow-[0_28px_80px_rgba(23,39,52,0.12)] ring-1 ring-white/45 backdrop-blur-[3px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(255,255,255,0.94),transparent_22%),radial-gradient(circle_at_76%_20%,rgba(47,111,237,0.08),transparent_26%),linear-gradient(180deg,rgba(244,241,234,0.22),rgba(255,255,255,0.06))]" />


        <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2 md:left-6 md:top-5">
          <span className="rounded-full border border-white/60 bg-white/72 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#172734]/78 backdrop-blur-md md:text-[11px]">
            Modelo
          </span>
          <span className="rounded-full border border-white/40 bg-white/48 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#647484] backdrop-blur-md md:text-[11px]">
            Escenario base
          </span>
          <span className="rounded-full border border-white/40 bg-white/48 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#647484] backdrop-blur-md md:text-[11px]">
            Optimización
          </span>
        </div>

        <div className="absolute inset-0 p-3 sm:p-4 md:p-6 lg:p-8">
          <div className="relative h-full w-full overflow-hidden rounded-[20px] border border-[#172734]/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.16))] shadow-inner">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
            <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/60 via-transparent to-transparent" />

            <svg
              viewBox="0 0 1200 620"
              className="absolute inset-0 h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="davBarsInk" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2F6FED" stopOpacity="0.18" />
                  <stop offset="55%" stopColor="#647484" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#647484" stopOpacity="0.05" />
                </linearGradient>

                <linearGradient id="davBand" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2F6FED" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#2F6FED" stopOpacity="0.02" />
                </linearGradient>

                <linearGradient id="davImproveFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2F6FED" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#2F6FED" stopOpacity="0.03" />
                </linearGradient>

                <linearGradient id="davFocus" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2F6FED" stopOpacity="0" />
                  <stop offset="45%" stopColor="#2F6FED" stopOpacity="0.12" />
                  <stop offset="55%" stopColor="#2F6FED" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#2F6FED" stopOpacity="0" />
                </linearGradient>

                <filter id="davBlueGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="2.6" floodColor="#2F6FED" floodOpacity="0.18" />
                </filter>

                <filter id="davSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000" floodOpacity="0.10" />
                </filter>

                <filter id="davOrangeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="2.4" floodColor="#FF6B4A" floodOpacity="0.18" />
                </filter>
              </defs>

              <g opacity="0.10" stroke="#647484" strokeWidth="1">
                <path d="M140 118H1080" strokeDasharray="6 12" />
                <path d="M140 208H1080" strokeDasharray="6 12" />
                <path d="M140 298H1080" strokeDasharray="6 12" />
                <path d="M140 388H1080" strokeDasharray="6 12" />
                <path d="M140 478H1080" strokeDasharray="6 12" />

                <path d="M260 88V510" strokeDasharray="6 12" />
                <path d="M420 88V510" strokeDasharray="6 12" />
                <path d="M580 88V510" strokeDasharray="6 12" />
                <path d="M740 88V510" strokeDasharray="6 12" />
                <path d="M900 88V510" strokeDasharray="6 12" />
                <path d="M1060 88V510" strokeDasharray="6 12" />
              </g>

              <g stroke="#647484" strokeWidth="1">
                <path d="M140 510H1080" opacity="0.34" />
                <path d="M140 88V510" opacity="0.22" />
              </g>

              <g className="dav-focusBand" opacity="0.65">
                <rect
                  x="-180"
                  y="94"
                  width="180"
                  height="392"
                  fill="url(#davFocus)"
                >
                  {!reduceMotion && (
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      from="0 0"
                      to="1260 0"
                      dur="9.8s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    />
                  )}
                </rect>
              </g>

              <g className="dav-bars" filter="url(#davBlueGlow)">
                {bars.map((bar) => (
                  <g key={bar.cls} className={`dav-bar ${bar.cls}`}>
                    <rect
                      x={bar.x}
                      y={bar.y}
                      width="22"
                      height={bar.h}
                      rx="6"
                      fill="url(#davBarsInk)"
                      opacity="0.68"
                    />
                    <rect
                      x={bar.x + 5}
                      y={bar.y + 12}
                      width="4"
                      height={Math.max(10, bar.h - 24)}
                      rx="2"
                      fill="#2F6FED"
                      opacity="0.18"
                    />
                    <rect
                      x={bar.x + 3}
                      y={bar.y + 3}
                      width="16"
                      height="6"
                      rx="3"
                      fill="#2F6FED"
                      opacity="0.18"
                    />
                    <rect
                      x={bar.x}
                      y={bar.y}
                      width="22"
                      height={bar.h}
                      rx="6"
                      fill="none"
                      stroke="#2F6FED"
                      strokeOpacity="0.12"
                      strokeWidth="1"
                    />
                  </g>
                ))}
              </g>

              <path
                d={baselinePath}
                fill="none"
                stroke="#647484"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="12 10"
                opacity="0.15"
                className="dav-baselineStatic"
              />

              <path
                d={baselinePath}
                fill="none"
                stroke="#647484"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="12 10"
                opacity="0"
                className="dav-baselineAnim"
              />

              <path
                d={`${optimizedPath} L1080 225 ${baselinePath.replace('M180 430', '')} Z`}
                fill="url(#davImproveFill)"
                opacity="0"
                className="dav-improve"
              />

              <path
                d="M180 342
                   C 300 316, 390 282, 500 224
                   C 620 172, 720 178, 820 164
                   C 930 148, 1010 144, 1082 156
                   L1082 196
                   C 1010 182, 930 186, 820 201
                   C 720 215, 620 216, 500 272
                   C 390 328, 300 360, 180 390 Z"
                fill="url(#davBand)"
                opacity="0"
                className="dav-band"
              />

              <path
                d={optimizedPath}
                fill="none"
                stroke="#2F6FED"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#davBlueGlow)"
                className="dav-optimized"
                style={{ strokeDasharray: '1400', strokeDashoffset: '1400' }}
              />

              <g opacity="0.95">
                <circle cx="180" cy="366" r="6" fill="#2F6FED" opacity="0.72" />
                <circle cx="500" cy="248" r="6" fill="#2F6FED" opacity="0.78" />

                <g filter="url(#davBlueGlow)">
                  <circle cx="820" cy="182" r="7" fill="#2F6FED" opacity="0.86" />
                  <circle
                    cx="820"
                    cy="182"
                    r="14"
                    fill="none"
                    stroke="#2F6FED"
                    strokeWidth="3"
                    opacity="0"
                  >
                    {!reduceMotion && (
                      <>
                        <animate
                          attributeName="opacity"
                          values="0;0.18;0"
                          dur="3.6s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="r"
                          values="12;18;12"
                          dur="3.6s"
                          repeatCount="indefinite"
                        />
                      </>
                    )}
                  </circle>
                </g>

                <g filter="url(#davOrangeGlow)">
                  <circle cx="1082" cy="174" r="7" fill="#FF6B4A" opacity="0.88" />
                  <circle
                    cx="1082"
                    cy="174"
                    r="16"
                    fill="none"
                    stroke="#FF6B4A"
                    strokeWidth="2"
                    opacity="0"
                  >
                    {!reduceMotion && (
                      <>
                        <animate
                          attributeName="opacity"
                          values="0;0.16;0"
                          dur="4.8s"
                          repeatCount="indefinite"
                          begin="1.4s"
                        />
                        <animate
                          attributeName="r"
                          values="11;18;11"
                          dur="4.8s"
                          repeatCount="indefinite"
                          begin="1.4s"
                        />
                      </>
                    )}
                  </circle>
                </g>
              </g>

              {!reduceMotion && (
                <g className="dav-tracker" filter="url(#davBlueGlow)">
                  <circle r="18" fill="#2F6FED" opacity="0.06">
                    <animateMotion
                      dur="9.8s"
                      repeatCount="indefinite"
                      path={optimizedPath}
                      rotate="auto"
                    />
                  </circle>
                  <circle r="4.5" fill="#2F6FED" opacity="0.92">
                    <animateMotion
                      dur="9.8s"
                      repeatCount="indefinite"
                      path={optimizedPath}
                      rotate="auto"
                    />
                  </circle>
                </g>
              )}

              <g className="dav-kpi" opacity="0" filter="url(#davSoftShadow)">
                <rect
                  x="850"
                  y="92"
                  width="250"
                  height="62"
                  rx="16"
                  fill="rgba(255,255,255,0.62)"
                  stroke="rgba(23,39,52,0.09)"
                />
                <text
                  x="874"
                  y="119"
                  fontSize="18"
                  fontFamily="ui-sans-serif, system-ui"
                  fill="rgba(23,39,52,0.86)"
                >
                  +21% eficiencia
                </text>
                <text
                  x="874"
                  y="139"
                  fontSize="12"
                  fontFamily="ui-sans-serif, system-ui"
                  fill="rgba(100,116,132,0.82)"
                >
                  ajuste operativo y lectura de datos
                </text>
                <circle cx="1078" cy="122" r="6" fill="#2F6FED" opacity="0.88" />
              </g>

              <g opacity="0.34" fontFamily="ui-sans-serif, system-ui" fontSize="12" fill="#647484">
                <text x="140" y="68">rendimiento</text>
                <text x="1034" y="528" opacity="0.72">tiempo</text>
              </g>
            </svg>

            <div className="hidden md:block absolute bottom-4 left-8 right-8 lg:left-10 lg:right-12">
              <div className="overflow-hidden rounded-[20px] border border-[#172734]/10 bg-white/44 shadow-[0_16px_40px_rgba(23,39,52,0.10)] backdrop-blur-[4px]">
                <div className="flex items-center justify-between border-b border-[#172734]/8 bg-white/26 px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/75" />
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[10.5px] font-medium text-[#647484]/85">
                      analysis.ipynb
                    </span>
                    <span className="rounded-full border border-[#2F6FED]/12 bg-[#2F6FED]/8 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#2F6FED]/84">
                      run ok
                    </span>
                  </div>

                  <div className="w-12" />
                </div>

                <div className="relative px-4 py-3 font-mono text-[10px] leading-[1.6] lg:text-[11px]">
                  <pre className="m-0">
                    <code className="dav-typing">
                      <span className="tok kw">from</span>{' '}
                      <span className="tok id">sklearn</span>.<span className="tok id">ensemble</span>{' '}
                      <span className="tok kw">import</span>{' '}
                      <span className="tok ty">RandomForestRegressor</span>{'\n'}
                      <span className="tok id">features</span> <span className="tok op">=</span>{' '}
                      [<span className="tok st">'demanda'</span>, <span className="tok st">'cobertura'</span>, <span className="tok st">'tiempo'</span>]{'\n'}
                      <span className="tok id">model</span> <span className="tok op">=</span>{' '}
                      <span className="tok ty">RandomForestRegressor</span>(<span className="tok id">n_estimators</span><span className="tok op">=</span><span className="tok num">250</span>){'\n'}
                      <span className="tok id">model</span>.<span className="tok fn">fit</span>(<span className="tok id">X_train</span>, <span className="tok id">y_train</span>){'\n'}
                      <span className="tok id">score_adj</span> <span className="tok op">=</span>{' '}
                      <span className="tok id">model</span>.<span className="tok fn">predict</span>(<span className="tok id">X_test</span>)
                    </code>
                  </pre>

                  <div className="dav-output mt-3 inline-flex items-center gap-2 rounded-full border border-[#172734]/8 bg-white/72 px-3 py-1.5 text-[10px] font-medium text-[#172734]/82 shadow-[0_8px_20px_rgba(23,39,52,0.06)]">
                    <span className="h-2 w-2 rounded-full bg-[#FF6B4A]" />
                    score ajustado: +21%
                  </div>

                  <span className="dav-cursor absolute left-4 top-[15px] h-[14px] w-[2px] bg-[#2F6FED]/80" />
                </div>
              </div>
            </div>

            <div className="md:hidden absolute bottom-3 left-3 right-3">
              <div className="rounded-2xl border border-[#172734]/8 bg-white/58 px-3 py-2.5 shadow-[0_10px_26px_rgba(23,39,52,0.08)] backdrop-blur-[4px]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#647484]">
                      análisis activo
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-[#172734]">
                      score ajustado +21%
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f56]/80" />
                    <span className="h-2 w-2 rounded-full bg-[#ffbd2e]/80" />
                    <span className="h-2 w-2 rounded-full bg-[#27c93f]/75" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-[#2F6FED]/10 shadow-inner" />
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          :global(.dav-kpi) {
            transform-box: fill-box;
            transform-origin: top right;
            transform: translate(-106px, 6px) scale(0.72);
          }

          :global(.dav-optimized) {
            stroke-width: 3.2;
          }

          :global(.dav-baselineStatic),
          :global(.dav-baselineAnim) {
            stroke-width: 2.4;
          }
        }

        @media (prefers-reduced-motion: no-preference) {
          :global(.dav-bars) {
            opacity: 0.92;
          }

          :global(.dav-bar) {
            transform-box: fill-box;
            transform-origin: center bottom;
            opacity: 0;
            transform: translateY(8px) scaleY(0.08);
            animation: davBarDraw 9.8s ease-in-out infinite;
            will-change: transform, opacity;
          }

          :global(.dav-b1) { animation-delay: 0.55s; }
          :global(.dav-b2) { animation-delay: 0.75s; }
          :global(.dav-b3) { animation-delay: 0.95s; }
          :global(.dav-b4) { animation-delay: 1.15s; }
          :global(.dav-b5) { animation-delay: 1.35s; }
          :global(.dav-b6) { animation-delay: 1.55s; }
          :global(.dav-b7) { animation-delay: 1.75s; }

          :global(.dav-optimized) {
            animation: davDraw 9.8s ease-in-out infinite;
          }

          :global(.dav-baselineAnim) {
            animation: davBaseline 9.8s ease-in-out infinite;
            will-change: stroke-dashoffset, opacity;
          }

          :global(.dav-band) {
            animation: davBand 9.8s ease-in-out infinite;
          }

          :global(.dav-improve) {
            animation: davImprove 9.8s ease-in-out infinite;
          }

          :global(.dav-kpi) {
            animation: davKpi 9.8s ease-in-out infinite;
          }

          :global(.dav-tracker) {
            animation: davTrackerOpacity 9.8s ease-in-out infinite;
          }

          :global(.dav-typing) {
            display: inline-block;
            white-space: pre;
            overflow: hidden;
            width: 0ch;
            animation: davType 9.8s steps(84, end) infinite;
          }

          :global(.dav-output) {
            opacity: 0;
            transform: translateY(6px);
            animation: davOutput 9.8s ease-in-out infinite;
          }

          :global(.dav-cursor) {
          animation:
            davCursorTrack 9.8s cubic-bezier(0.22, 0.61, 0.36, 1) infinite,
            davBlink 1s steps(1, end) infinite;
          box-shadow: 0 0 10px rgba(47, 111, 237, 0.22);
        }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.dav-optimized) { stroke-dashoffset: 0; }
          :global(.dav-band),
          :global(.dav-improve),
          :global(.dav-kpi),
          :global(.dav-output) { opacity: 1; transform: none; }
          :global(.dav-typing) { width: 84ch; }
          :global(.dav-cursor) { display: none; }
          :global(.dav-bar) { opacity: 0.42; transform: none; }
          :global(.dav-baselineAnim) { opacity: 0.18; stroke-dashoffset: 0; }
          :global(.dav-baselineStatic) { opacity: 0.16; }
          :global(.dav-tracker) { opacity: 0; }
        }

        @keyframes davBarDraw {
          0%   { opacity: 0;    transform: translateY(10px) scaleY(0.06); }
          16%  { opacity: 0;    transform: translateY(10px) scaleY(0.06); }
          32%  { opacity: 0.98; transform: translateY(0) scaleY(1); }
          72%  { opacity: 0.72; transform: translateY(0) scaleY(1); }
          88%  { opacity: 0.48; transform: translateY(2px) scaleY(0.94); }
          100% { opacity: 0;    transform: translateY(10px) scaleY(0.06); }
        }

        @keyframes davDraw {
          0%   { stroke-dashoffset: 1400; opacity: 0; }
          12%  { opacity: 0; }
          20%  { opacity: 1; }
          56%  { stroke-dashoffset: 0; opacity: 1; }
          82%  { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 1400; opacity: 0; }
        }

        @keyframes davBaseline {
          0%   { opacity: 0; stroke-dashoffset: 1200; }
          10%  { opacity: 0; stroke-dashoffset: 1200; }
          30%  { opacity: 0.34; stroke-dashoffset: 0; }
          74%  { opacity: 0.24; stroke-dashoffset: -180; }
          100% { opacity: 0; stroke-dashoffset: -300; }
        }

        @keyframes davBand {
          0%   { opacity: 0; }
          24%  { opacity: 0; }
          40%  { opacity: 0.9; }
          82%  { opacity: 0.9; }
          100% { opacity: 0; }
        }

        @keyframes davImprove {
          0%   { opacity: 0; }
          28%  { opacity: 0; }
          45%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes davKpi {
          0%   { opacity: 0; transform: translateY(6px); }
          50%  { opacity: 0; transform: translateY(6px); }
          62%  { opacity: 1; transform: translateY(0); }
          84%  { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(6px); }
        }

        @keyframes davTrackerOpacity {
          0%   { opacity: 0; }
          26%  { opacity: 0; }
          42%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes davType {
          0%   { width: 0ch; opacity: 0.86; }
          24%  { width: 0ch; opacity: 0.86; }
          60%  { width: 84ch; opacity: 1; }
          82%  { width: 84ch; opacity: 1; }
          100% { width: 0ch; opacity: 0.86; }
        }

        @keyframes davOutput {
          0%   { opacity: 0; transform: translateY(6px); }
          60%  { opacity: 0; transform: translateY(6px); }
          70%  { opacity: 1; transform: translateY(0); }
          86%  { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(6px); }
        }

        @keyframes davCursorTrack {
          0%   { transform: translateX(0); opacity: 0; }
          24%  { transform: translateX(0); opacity: 0; }
          60%  { transform: translateX(328px); opacity: 1; }
          82%  { transform: translateX(328px); opacity: 1; }
          100% { transform: translateX(0); opacity: 0; }
        }

        @keyframes davBlink {
          0%, 49% { opacity: 0; }
          50%, 100% { opacity: 1; }
        }

        :global(.tok) { color: rgba(100, 116, 132, 0.95); }
        :global(.tok.kw) { color: rgba(47, 111, 237, 0.96); }
        :global(.tok.fn) { color: rgba(47, 111, 237, 0.84); }
        :global(.tok.ty) { color: rgba(255, 107, 74, 0.82); }
        :global(.tok.st) { color: rgba(53, 146, 96, 0.88); }
        :global(.tok.num) { color: rgba(255, 107, 74, 0.76); }
        :global(.tok.op) { color: rgba(100, 116, 132, 0.84); }
        :global(.tok.id) { color: rgba(23, 39, 52, 0.74); }
      `}</style>
    </motion.div>
  );
}