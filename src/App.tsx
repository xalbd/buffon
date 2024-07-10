import React from "react";
import Graph, { GraphData } from "./components/Graph";
import Drawing, { PointData } from "./components/Drawing";

function App() {
  const [data, setData] = React.useState<PointData>([]);
  const [calculatedPi, setCalculatedPi] = React.useState<GraphData>([]);
  const [landed, setLanded] = React.useState<number>(0);
  const [needles, setNeedles] = React.useState<number>(0);
  const [lines, setLines] = React.useState<number>(10);
  const [changeLines, setChangeLines] = React.useState<number>(10);
  const [toDrop, setToDrop] = React.useState<number>(50);
  const [truncate, setTruncate] = React.useState<number>(1000);
  const [isTruncated, setIsTruncated] = React.useState<boolean>(true);

  const lineLength = 1000 / (lines + 1);

  function generateNeedles(count: number) {
    const newData: PointData = [];
    const newPi: GraphData = [];
    let newLanded = landed;

    for (
      let currentNeedle = needles + 1;
      currentNeedle <= needles + count;
      currentNeedle++
    ) {
      // generate needle
      const x = Math.random() * 1000;
      const y = Math.random() * 1000;
      const angle = Math.random() * Math.PI * 2;

      const dx = (Math.cos(angle) * lineLength) / 2;
      const dy = (Math.sin(angle) * lineLength) / 2;

      // check if needle crosses a line & calculate new probability
      const leftSection = Math.floor((x - dx) / lineLength);
      const rightSection = Math.floor((x + dx) / lineLength);

      if (leftSection !== rightSection) {
        newLanded++;
      }
      const calculatedProbability = newLanded / currentNeedle;

      // add new data
      newData.push({
        id: currentNeedle,
        color:
          leftSection !== rightSection
            ? "hsl(0, 70%, 50%)"
            : "hsl(240, 70%, 50%)",
        data: [
          { x: x - dx, y: y - dy },
          { x: x + dx, y: y + dy },
        ],
      });

      newPi.push({
        x: currentNeedle,
        y: calculatedProbability === 0 ? null : 2 / calculatedProbability,
      });
    }

    setData([...data, ...newData].slice(isTruncated ? -truncate : 0));
    setCalculatedPi(
      [...calculatedPi, ...newPi].slice(isTruncated ? -truncate : 0)
    );
    setNeedles(needles + count);
    setLanded(newLanded);
  }

  function reset() {
    setData([]);
    setCalculatedPi([]);
    setNeedles(0);
    setLanded(0);
  }

  return (
    <div className="h-screen mx-3">
      <h1 className="text-center font-bold my-3 text-gray-200">
        Buffon's Needle
      </h1>
      <div className="flex flex-row gap-3">
        <Drawing data={data} lines={lines} />
        <Graph data={calculatedPi} />
      </div>
      <div className="flex flex-col">
        <div>
          <button
            className="btn btn-primary"
            onClick={() => generateNeedles(1)}
          >
            Drop 1
          </button>
          <button
            className="btn btn-primary"
            onClick={() => generateNeedles(10)}
          >
            Drop 10
          </button>
          <button
            className="btn btn-primary"
            onClick={() => generateNeedles(100)}
          >
            Drop 100
          </button>
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => generateNeedles(toDrop)}
          >
            Drop Custom
          </button>
          <input
            type="number"
            placeholder="Drop custom amount..."
            className="input input-bordered"
            value={toDrop}
            min={1}
            onChange={(e) => setToDrop(parseInt(e.target.value, 10))}
          />
        </div>

        <div>
          <input
            type="checkbox"
            className="toggle toggle-accent"
            checked={isTruncated}
            onChange={(e) => setIsTruncated(e.target.checked)}
            id="truncate"
          />
          {isTruncated && (
            <input
              type="number"
              placeholder="Truncate to last..."
              className="input input-bordered"
              value={truncate}
              min={1000}
              onChange={(e) => setTruncate(parseInt(e.target.value, 10))}
            />
          )}
          <label htmlFor="truncate">Truncate Output</label>
        </div>
        <div>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setLines(changeLines);
              reset();
            }}
          >
            Change Line Count & Reset
          </button>
          <input
            type="number"
            placeholder="Change line count..."
            className="input input-bordered"
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
      <p>
        {needles} needles have been dropped. <br />π is estimated to be{" "}
        {2 / (landed / needles)}
      </p>
    </div>
  );
}

export default App;
