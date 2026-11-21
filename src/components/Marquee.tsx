import React from 'react';
import { Figma, Globe, Github } from 'lucide-react';

export const Marquee: React.FC = () => {
  const items = [
    { name: "Figma", icon: Figma },
    { name: "Vercel", icon: Globe },
    { name: "GitHub", icon: Github },
    { name: "Netlify", icon: Globe },
    { name: "Figma", icon: Figma },
  ];

  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="py-6 bg-gradient-to-r from-purple-900 via-violet-800 to-purple-900 border-y border-purple-700/50 overflow-hidden relative shadow-2xl">
      <div className="flex w-full overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee items-center gap-16 py-2">
          {duplicatedItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-3 px-6 py-2 shrink-0">
                <Icon className="w-6 h-6 text-white" />
                <span className="text-white font-serif italic text-xl font-bold tracking-wider">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
