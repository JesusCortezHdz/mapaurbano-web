'use client';

type Props = {
  variant?: 'hero' | 'card';
};

function CardOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="c-scannerGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2F6FED" stopOpacity="0" />
            <stop offset="30%" stopColor="#2F6FED" stopOpacity="0.04" />
            <stop offset="50%" stopColor="#2F6FED" stopOpacity="0.09" />
            <stop offset="70%" stopColor="#2F6FED" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#2F6FED" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="c-routeTrace" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2F6FED" stopOpacity="0" />
            <stop offset="35%" stopColor="#2F6FED" stopOpacity="0.42" />
            <stop offset="50%" stopColor="#2F6FED" stopOpacity="0.7" />
            <stop offset="65%" stopColor="#2F6FED" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#2F6FED" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="c-heatBlue" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#2F6FED" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#2F6FED" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#2F6FED" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="c-heatOrange" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#FF6B4A" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#FF6B4A" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#FF6B4A" stopOpacity="0" />
          </radialGradient>

          <filter id="c-softGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="c-traceGlow">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#c-softGlow)">
          <rect
            x="0"
            y="-100"
            width="1200"
            height="100"
            fill="url(#c-scannerGrad)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="0 900"
              dur="12s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.42 0 0.58 1"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.08;0.92;1"
              dur="12s"
              repeatCount="indefinite"
            />
          </rect>

          <line
            x1="0"
            y1="-50"
            x2="1200"
            y2="-50"
            stroke="#2F6FED"
            strokeWidth="0.5"
            opacity="0.08"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="0 900"
              dur="12s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.42 0 0.58 1"
            />
            <animate
              attributeName="opacity"
              values="0;0.10;0.10;0"
              keyTimes="0;0.08;0.92;1"
              dur="12s"
              repeatCount="indefinite"
            />
          </line>
        </g>

        <g>
          <circle cx="520" cy="290" r="32" fill="url(#c-heatBlue)">
            <animate
              attributeName="r"
              values="34;44;34"
              dur="7s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.65;0.9;0.65"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="520" cy="290" r="2.6" fill="#2F6FED" opacity="0.58">
            <animate
              attributeName="r"
              values="2.6;3.8;2.6"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>

          <g opacity="0.58" filter="url(#c-traceGlow)">
            <path
              d="M 285 585
                 Q 395 618, 500 624
                 Q 615 630, 745 622
                 Q 870 612, 980 595
                 Q 1080 580, 1185 565"
              stroke="url(#c-routeTrace)"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeDasharray="20 760"
              strokeDashoffset="0"
              fill="none"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="780"
                to="-780"
                dur="20s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </path>

            <path
              d="M 730 120
                 Q 718 235, 710 350
                 Q 704 470, 696 662"
              stroke="url(#c-routeTrace)"
              strokeWidth="1.15"
              strokeLinecap="round"
              strokeDasharray="14 560"
              strokeDashoffset="0"
              fill="none"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="-574"
                to="574"
                dur="24s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </path>

            <path
              d="M 760 120
                 Q 735 250, 720 390
                 Q 710 505, 700 660"
              stroke="url(#c-routeTrace)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="34 420"
              strokeDashoffset="0"
              fill="none"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="454"
                to="-454"
                dur="18s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </path>
          </g>

          <circle cx="860" cy="520" r="34" fill="url(#c-heatOrange)">
            <animate
              attributeName="r"
              values="30;40;30"
              dur="9s"
              repeatCount="indefinite"
              begin="2.5s"
            />
            <animate
              attributeName="opacity"
              values="0.58;0.82;0.58"
              dur="9s"
              repeatCount="indefinite"
              begin="2.5s"
            />
          </circle>

          <circle cx="860" cy="520" r="2.8" fill="#FF6B4A" opacity="0.5">
            <animate
              attributeName="r"
              values="2.3;3.6;2.3"
              dur="9s"
              repeatCount="indefinite"
              begin="2.5s"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}

function HeroBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="h-traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2F6FED" stopOpacity="0" />
            <stop offset="30%" stopColor="#2F6FED" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#2F6FED" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#2F6FED" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#2F6FED" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="h-nodeBlue" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#2F6FED" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#2F6FED" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#2F6FED" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="h-nodeSlate" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#647484" stopOpacity="0.28" />
            <stop offset="60%" stopColor="#647484" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#647484" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="h-nodeOrange" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#FF6B4A" stopOpacity="0.28" />
            <stop offset="60%" stopColor="#FF6B4A" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FF6B4A" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="h-microBlue" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#2F6FED" stopOpacity="0.22" />
            <stop offset="55%" stopColor="#2F6FED" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#2F6FED" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="h-microOrange" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#FF6B4A" stopOpacity="0.18" />
            <stop offset="55%" stopColor="#FF6B4A" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#FF6B4A" stopOpacity="0" />
          </radialGradient>

          <filter id="h-nodeGlow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g id="structural-routes">
          <path
            d="M 640 20
               L 640 140
               Q 640 180, 680 180
               L 940 180
               Q 980 180, 980 220
               L 980 360
               Q 980 400, 1020 400
               L 1440 400"
            stroke="#2F6FED"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeOpacity="0.14"
            fill="none"
          />

          <path
            d="M 1440 140
               L 1220 140
               Q 1180 140, 1180 180
               L 1180 300
               Q 1180 340, 1140 340
               L 860 340
               Q 820 340, 820 380
               L 820 500
               Q 820 540, 780 540
               L 580 540"
            stroke="#2F6FED"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeOpacity="0.15"
            fill="none"
          />

          <path
            d="M 1440 280
               L 1080 280
               Q 1040 280, 1040 320
               L 1040 460
               Q 1040 500, 1000 500
               L 740 500"
            stroke="#2F6FED"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeOpacity="0.12"
            fill="none"
          />

          <path
            d="M 1440 600
               L 1160 600
               Q 1120 600, 1120 640
               L 1120 720
               Q 1120 760, 1080 760
               L 700 760"
            stroke="#2F6FED"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.08"
            fill="none"
          />

          <path
            d="M 560 680
               L 560 560
               Q 560 520, 600 520
               L 740 520
               Q 780 520, 780 480
               L 780 380
               Q 780 340, 820 340
               L 980 340"
            stroke="#2F6FED"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeOpacity="0.1"
            fill="none"
          />
        </g>

        <g id="secondary-connectors">
          <path
            d="M 1100 180
               L 1100 340"
            stroke="#647484"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.18"
            strokeDasharray="4 6"
            fill="none"
          />

          <path
            d="M 1040 460
               Q 1040 500, 1000 500
               L 980 500
               Q 940 500, 940 540
               L 940 600"
            stroke="#647484"
            strokeWidth="1"
            strokeLinecap="round"
            strokeOpacity="0.1"
            strokeDasharray="3 6"
            fill="none"
          />

          <path
            d="M 860 340
               L 860 280"
            stroke="#647484"
            strokeWidth="1"
            strokeLinecap="round"
            strokeOpacity="0.1"
            strokeDasharray="3 6"
            fill="none"
          />
        </g>

        <g id="network-nodes" filter="url(#h-nodeGlow)">
          <circle cx="1180" cy="300" r="16" fill="url(#h-nodeBlue)">
            <animate
              attributeName="r"
              values="18;26;18"
              dur="11s"
              repeatCount="indefinite"
              begin="3s"
            />
            <animate
              attributeName="opacity"
              values="0.55;0.78;0.55"
              dur="14s"
              repeatCount="indefinite"
              begin="3s"
            />
          </circle>
          <circle cx="1180" cy="300" r="1.7" fill="#2F6FED" opacity="0.18" />

          <circle cx="1040" cy="460" r="18" fill="url(#h-nodeSlate)">
            <animate
              attributeName="r"
              values="16;22;16"
              dur="13s"
              repeatCount="indefinite"
              begin="5s"
            />
            <animate
              attributeName="opacity"
              values="0.5;0.72;0.5"
              dur="13s"
              repeatCount="indefinite"
              begin="5s"
            />
          </circle>
          <circle cx="1040" cy="460" r="1.7" fill="#647484" opacity="0.22" />

          <circle cx="820" cy="380" r="12" fill="url(#h-nodeOrange)">
            <animate
              attributeName="r"
              values="14;20;14"
              dur="10s"
              repeatCount="indefinite"
              begin="7s"
            />
            <animate
              attributeName="opacity"
              values="0.45;0.65;0.45"
              dur="10s"
              repeatCount="indefinite"
              begin="7s"
            />
          </circle>
          <circle cx="820" cy="380" r="1.6" fill="#FF6B4A" opacity="0.12" />
        </g>

        <g id="animated-trace">
          <path
            d="M 640 20
               L 640 140
               Q 640 180, 680 180
               L 940 180
               Q 980 180, 980 220
               L 980 360
               Q 980 400, 1020 400
               L 1440 400"
            stroke="url(#h-traceGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeDasharray="44 980"
            strokeDashoffset="0"
            fill="none"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="1020"
              to="-1020"
              dur="18s"
              repeatCount="indefinite"
              calcMode="linear"
            />
          </path>
        </g>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-r from-[#F4F1EA] from-[30%] via-[#F4F1EA]/84 via-[44%] to-transparent to-[64%]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4F1EA]/50 via-transparent to-[#F4F1EA]/40" />
    </div>
  );
}

export function HeroNetworkBackground({ variant = 'hero' }: Props) {
  if (variant === 'card') return <CardOverlay />;
  return <HeroBackground />;
}