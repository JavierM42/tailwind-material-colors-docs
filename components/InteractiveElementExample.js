import { useState } from "react";

const InteractiveElementExample = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <button
        className="interactive-bg-primary-container relative flex-1 px-2 py-1 flex flex-col items-center justify-center mb-1"
        disabled={disabled}
      >
        <div>Interactive element{disabled && " (disabled)"}</div>
        <div className="absolute bottom-2 right-2 text-xs">
          .interactive-bg-primary-container
        </div>
      </button>
      <div className="flex justify-end">
        <label className="flex items-center gap-2">
          Disabled{" "}
          <input
            type="checkbox"
            className="h-5 w-5"
            onChange={() => setDisabled((value) => !value)}
          />
        </label>
      </div>
    </>
  );
};

export default InteractiveElementExample;
