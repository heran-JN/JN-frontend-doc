import clsx from 'clsx';
import React from 'react';

interface ColorItemProps {
  title: string;
  subtitle: string;
  colors: Record<string, string>;
}

const ColorItem: React.FC<ColorItemProps> = ({ title, subtitle, colors }) => {
  return (
    <div className="mb-4 p-4 border rounded shadow">
      <h3 className="text-lg text-white font-semibold">{title}</h3>
      <p className="text-sm text-white">{subtitle}</p>
      <div className="flex flex-wrap mt-2">
        {Object.entries(colors).map(([shade, color]) => (
          <div key={shade} className="flex items-center mr-4 mb-2">
            <div
              className={clsx(
                'w-8 h-8 mr-2 rounded',
                `bg-[${color}]`
              )}
              style={{ backgroundColor: color }}
            ></div>
            <span className="text-sm text-white">{shade}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ColorPalette: React.FC = () => {
  return (
    <div className="p-8">
      <ColorItem
        title="Main Colors"
        subtitle=""
        colors={{
          "Accent": "var(--accent)",
          "White": "var(--white)",
          "White/50%": "var(--white-50)",
          "background": "var(--background)",
          "error": "var(--destructive)",
        }}
      />
    </div>
  );
};

export default ColorPalette;
