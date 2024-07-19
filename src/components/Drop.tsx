import React from "react";

interface DropProps {
  generateNeedles: (needles: number) => void;
}

function Drop({ generateNeedles }: DropProps) {
  const [toDrop, setToDrop] = React.useState<number>(50);

  return (
    <>
      <div className="space-x-2 flex items-center">
        <button className="btn btn-primary" onClick={() => generateNeedles(1)}>
          Drop 1
        </button>
        <button className="btn btn-primary" onClick={() => generateNeedles(10)}>
          Drop 10
        </button>
        <button
          className="btn btn-primary"
          onClick={() => generateNeedles(100)}
        >
          Drop 100
        </button>
      </div>
      <div className="space-x-2 flex items-center">
        <button
          className="btn btn-primary"
          onClick={() => {
            if (toDrop && toDrop >= 1) generateNeedles(toDrop);
          }}
          disabled={!toDrop || toDrop < 1}
        >
          Drop Custom
        </button>
        <input
          type="number"
          placeholder="Drop..."
          className="input input-bordered w-36"
          value={toDrop}
          min={1}
          onChange={(e) => setToDrop(parseInt(e.target.value, 10))}
        />
      </div>
    </>
  );
}

export default Drop;
