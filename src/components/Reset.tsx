import React from "react";

interface ResetProps {
  reset: () => void;
  setLines: (lines: number) => void;
}

function Reset({ reset, setLines }: ResetProps) {
  const [changeLines, setChangeLines] = React.useState<number>(10);

  return (
    <div className="flex flex-col space-y-4 py-4">
      <div className="space-x-2 flex items-center">
        <button
          className="btn btn-secondary"
          onClick={() => {
            setLines(changeLines);
            reset();
          }}
          disabled={!changeLines || changeLines < 1}
        >
          Change Line Count & Reset
        </button>
        <input
          type="number"
          placeholder="Line count..."
          className="input input-bordered w-36"
          value={changeLines}
          min={1}
          onChange={(e) => {
            setChangeLines(parseInt(e.target.value, 10));
          }}
        />
      </div>
      <div>
        <button className="btn btn-secondary" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Reset;
