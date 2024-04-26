import { useState } from "react";
import useDebouncedEffect from "use-debounced-effect";
import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";

const TryDynamicColor = () => {
  const [scheme, setScheme] = useState("content");
  const [contrast, setContrast] = useState(0);
  const [primary, setPrimary] = useState("#506546");
  const [secondary, setSecondary] = useState(null);
  const [tertiary, setTertiary] = useState(null);

  useDebouncedEffect(
    () => {
      updateTheme(
        {
          primary,
          ...(secondary ? { secondary } : {}),
          ...(tertiary ? { tertiary } : {}),
        },
        "class",
        scheme,
        contrast
      );
    },
    100,
    [primary, secondary, tertiary, scheme, contrast]
  );

  return (
    <div className="bg-surface-container-high rounded-md p-2 min-h-[160px] my-8 shadow-xl shadow-primary-container/20">
      <h4 className="font-bold text-xl text-tertiary mb-2">
        Customize color palette
      </h4>
      <div className="flex gap-4 flex-wrap justify-around">
        <label className="space-y-0.5">
          <div className="text-sm">Scheme</div>
          <select
            onChange={(e) => setScheme(e.target.value)}
            value={scheme}
            className="h-9 px-1 shadow interactive-bg-primary-container rounded w-40 focus:outline-none"
          >
            <option value="content">Content</option>
            <option value="expressive">Expressive</option>
            <option value="fidelity">Fidelity</option>
            <option value="monochrome">Monochrome</option>
            <option value="neutral">Neutral</option>
            <option value="tonalSpot">Tonal Spot</option>
            <option value="vibrant">Vibrant</option>
          </select>
        </label>
        <label className="space-y-0.5">
          <div className="text-sm">Primary</div>
          <input
            type="color"
            value={primary}
            className="w-24 h-9 px-1 py-0.5 rounded-md shadow interactive-bg-surface cursor-pointer"
            onChange={(e) => setPrimary(e.target.value)}
          />
        </label>
        <div className="flex flex-col gap-0.5">
          <label className="space-y-0.5">
            <div className="text-sm">Secondary</div>
            {secondary && (
              <input
                type="color"
                value={secondary}
                className="w-24 h-9 px-0 py-0.5 rounded-md shadow interactive-bg-surface cursor-pointer"
                onChange={(e) => setSecondary(e.target.value)}
              />
            )}
          </label>
          <button
            onClick={() => setSecondary((value) => (value ? null : "#54624d"))}
            className={`w-24 h-9 font-medium rounded-md shadow ${
              secondary
                ? "mt-1 interactive-bg-surface"
                : "interactive-bg-secondary"
            }`}
          >
            {secondary ? "Reset" : "Choose"}
          </button>
        </div>
        <div className="flex flex-col gap-0.5">
          <label className="space-y-0.5">
            <div className="text-sm">Tertiary</div>
            {tertiary && (
              <input
                type="color"
                value={tertiary}
                className="w-24 h-9 px-1 py-0.5 rounded-md shadow interactive-bg-surface cursor-pointer"
                onChange={(e) => setTertiary(e.target.value)}
              />
            )}
          </label>
          <button
            onClick={() => setTertiary((value) => (value ? null : "#bcebed"))}
            className={`w-24 h-9 font-medium rounded-md shadow ${
              tertiary
                ? "mt-1 interactive-bg-surface"
                : "interactive-bg-tertiary"
            }`}
          >
            {tertiary ? "Reset" : "Choose"}
          </button>
        </div>
        <label className="space-y-0.5">
          <div className="text-sm">Contrast:</div>
          <input
            type="range"
            min="-1"
            max="1"
            step="0.1"
            value={contrast}
            className="w-40 h-9 px-1 py-0.5 cursor-pointer accent-primary-container"
            onChange={(e) => setContrast(e.target.value)}
          />
          <div className="text-sm text-center">{contrast}</div>
        </label>
      </div>
    </div>
  );
};

export default TryDynamicColor;
