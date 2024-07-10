import { ResponsiveLine } from "@nivo/line";

type PointData = Array<{
  id: number;
  color: string;
  data: Array<{
    x: number;
    y: number;
  }>;
}>;

interface DrawingProps {
  data: PointData;
  lines: number;
}

function Drawing({ data, lines }: DrawingProps) {
  function generateGrid() {
    const numbers = [];
    for (let i = 1; i <= lines; i++) {
      numbers.push(1000 * (i / (lines + 1)));
    }

    return numbers;
  }

  return (
    <div className="rounded-md aspect-square min-w-0 min-h-0 basis-1/3">
      <ResponsiveLine
        data={data}
        theme={{
          background: "white",
          grid: { line: { stroke: "#333333", strokeWidth: 1 } },
        }}
        xScale={{ type: "linear", min: 0, max: 1000 }}
        yScale={{ type: "linear", min: 0, max: 1000 }}
        gridXValues={generateGrid()}
        enableGridY={false}
        colors={(d) => d.color}
        lineWidth={1}
        animate={false}
        enablePoints={false}
        isInteractive={false}
      />
    </div>
  );
}

export default Drawing;
export type { PointData };
