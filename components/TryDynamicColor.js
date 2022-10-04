import { useState } from "react";
import useDebouncedEffect from "use-debounced-effect";
import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";

const TryDynamicColor = () => {
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
        "class"
      );
    },
    100,
    [primary, secondary, tertiary]
  );

  return (
    <div className="space-y-4 mt-2">
      <label className="flex items-center gap-2">
        <div className="text-lg">Primary:</div>
        <input
          type="color"
          value={primary}
          className="w-24 h-9 px-1 py-0.5 rounded-md shadow interactive-bg-surface cursor-pointer"
          onChange={(e) => setPrimary(e.target.value)}
        />
      </label>
      <div className="flex items-center gap-2">
        <label className="contents">
          <div className="text-lg font-bold">Secondary:</div>
          {secondary && (
            <input
              type="color"
              value={secondary}
              className="w-24 h-9 px-1 py-0.5 rounded-md shadow interactive-bg-surface cursor-pointer"
              onChange={(e) => setSecondary(e.target.value)}
            />
          )}
        </label>
        <button
          onClick={() => setSecondary((value) => (value ? null : "#54624d"))}
          className="px-4 py-2 font-medium rounded-md shadow interactive-bg-surface"
        >
          {secondary ? "Switch to Auto" : "Choose"}
        </button>
      </div>
      <div className="flex items-center gap-2">
        <label className="contents">
          <div className="text-lg font-bold">Tertiary:</div>
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
          className="px-4 py-2 font-medium rounded-md shadow interactive-bg-surface"
        >
          {tertiary ? "Switch to Auto" : "Choose"}
        </button>
      </div>
    </div>
  );
};

export default TryDynamicColor;
