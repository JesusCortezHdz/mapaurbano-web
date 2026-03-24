'use client';

import { useEffect, useRef, useState } from 'react';

type IconType =
  | 'qgis'
  | 'arcgis'
  | 'python'
  | 'r'
  | 'anaconda'
  | 'excel'
  | 'powerbi'
  | 'sql'
  | 'pycharm'
  | 'autocad'
  | 'synchro';

interface Skill {
  icon: IconType;
  label: string;
}

const innerSkills: Skill[] = [
  { icon: 'qgis', label: 'QGIS' },
  { icon: 'python', label: 'Python' },
  { icon: 'excel', label: 'Excel' },
  { icon: 'sql', label: 'SQL' },
  { icon: 'autocad', label: 'AutoCAD' },
];

const outerSkills: Skill[] = [
  { icon: 'arcgis', label: 'ArcGIS' },
  { icon: 'r', label: 'R' },
  { icon: 'anaconda', label: 'Anaconda' },
  { icon: 'powerbi', label: 'Power BI' },
  { icon: 'pycharm', label: 'PyCharm' },
  { icon: 'synchro', label: 'Synchro' },
];

export function OrbitingSkills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const getIconContent = (icon: IconType) => {
    const iconMap: Record<IconType, string> = {
      qgis: 'QGIS',
      arcgis: 'ArcGIS',
      python: 'Python',
      r: 'R',
      anaconda: 'Anaconda',
      excel: 'Excel',
      powerbi: 'Power BI',
      sql: 'SQL',
      pycharm: 'PyCharm',
      autocad: 'AutoCAD',
      synchro: 'Synchro',
    };
    return iconMap[icon];
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-square flex items-center justify-center">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-24 h-24 bg-[#2F6FED] rounded-full flex items-center justify-center shadow-lg z-10">
            <span className="text-white text-sm font-bold text-center px-2">
              MapaUrbano
            </span>
          </div>
        </div>

        <div
          className={`absolute inset-0 ${
            prefersReducedMotion ? '' : 'animate-spin-slow'
          }`}
          style={{
            animationDuration: prefersReducedMotion ? '0s' : '30s',
          }}
        >
          {innerSkills.map((skill, index) => {
            const angle = (index / innerSkills.length) * 2 * Math.PI;
            const radius = 28;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);

            return (
              <div
                key={skill.icon}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div
                  className={`relative ${
                    prefersReducedMotion ? '' : 'animate-reverse-spin-slow'
                  }`}
                  style={{
                    animationDuration: prefersReducedMotion ? '0s' : '30s',
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.label)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="bg-white border-2 border-[#2F6FED] rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all hover:scale-110 cursor-default">
                    <span className="text-sm font-semibold text-[#172734] whitespace-nowrap">
                      {getIconContent(skill.icon)}
                    </span>
                  </div>
                  {hoveredSkill === skill.label && (
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-[#172734] text-white px-3 py-1 rounded text-xs whitespace-nowrap z-20">
                      {skill.label}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`absolute inset-0 ${
            prefersReducedMotion ? '' : 'animate-spin-slower'
          }`}
          style={{
            animationDuration: prefersReducedMotion ? '0s' : '45s',
          }}
        >
          {outerSkills.map((skill, index) => {
            const angle = (index / outerSkills.length) * 2 * Math.PI;
            const radius = 42;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);

            return (
              <div
                key={skill.icon}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div
                  className={`relative ${
                    prefersReducedMotion ? '' : 'animate-reverse-spin-slower'
                  }`}
                  style={{
                    animationDuration: prefersReducedMotion ? '0s' : '45s',
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.label)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="bg-white border-2 border-[#647484] rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all hover:scale-110 cursor-default">
                    <span className="text-sm font-semibold text-[#172734] whitespace-nowrap">
                      {getIconContent(skill.icon)}
                    </span>
                  </div>
                  {hoveredSkill === skill.label && (
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-[#172734] text-white px-3 py-1 rounded text-xs whitespace-nowrap z-20">
                      {skill.label}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed border-[#2F6FED] opacity-20"
            style={{ width: '56%', height: '56%', margin: 'auto', top: 0, bottom: 0, left: 0, right: 0 }}
          />
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed border-[#647484] opacity-20"
            style={{ width: '84%', height: '84%', margin: 'auto', top: 0, bottom: 0, left: 0, right: 0 }}
          />
        </div>
      </div>
    </div>
  );
}
