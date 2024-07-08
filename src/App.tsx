import React from "react";
import Graph, { GraphData } from "./components/Graph";
import Drawing, { PointData } from "./components/Drawing";

function App() {
  const [data, setData] = React.useState<PointData>([]);
  const [calculatedPi, setCalculatedPi] = React.useState<GraphData>([]);
  const [landed, setLanded] = React.useState<number>(0);
  const [needles, setNeedles] = React.useState<number>(0);
  const [lines, setLines] = React.useState<number>(10);

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
      const x = Math.random() * 1000;
      const y = Math.random() * 1000;
      const angle = Math.random() * Math.PI * 2;

      const dx = (Math.cos(angle) * lineLength) / 2;
      const dy = (Math.sin(angle) * lineLength) / 2;

      newData.push({
        id: currentNeedle,
        data: [
          { x: x - dx, y: y - dy }, // Start point of the line
          { x: x + dx, y: y + dy }, // End point of the line
        ],
      });

      const leftSection = Math.floor((x - dx) / lineLength);
      const rightSection = Math.floor((x + dx) / lineLength);

      if (leftSection !== rightSection) {
        newLanded++;
      }

      const calculatedProbability = newLanded / currentNeedle;
      newPi.push({
        x: currentNeedle,
        y: calculatedProbability === 0 ? null : 2 / calculatedProbability,
      });
    }

    setData([...data, ...newData]);
    setCalculatedPi([...calculatedPi, ...newPi]);
    setNeedles(needles + count);
    setLanded(newLanded);
  }

  console.log(calculatedPi);

  return (
    <div className="h-screen mx-3">
      <h1 className="text-center font-bold my-3 text-gray-200">
        Buffon's Needle
      </h1>
      <div className="grid grid-cols-2 gap-3 h-4/6">
        <Drawing data={data} lines={lines} />
        <Graph data={calculatedPi} />
      </div>
      <button className="btn btn-primary" onClick={() => generateNeedles(10)}>
        Drop
      </button>
    </div>
  );
}

export default App;
