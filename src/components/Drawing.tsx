import { ResponsiveLineCanvas } from "@nivo/line";

type PointData = Array<{
  id: number;
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
    <div className="bg-white">
      <ResponsiveLineCanvas
        data={data}
        xScale={{ type: "linear", min: 0, max: 1000 }}
        yScale={{ type: "linear", min: 0, max: 1000 }}
        gridXValues={generateGrid()}
        enableGridY={false}
        colors={{ scheme: "spectral" }}
        lineWidth={1}
        enablePoints={false}
        isInteractive={false}
      />
    </div>
  );
}

export default Drawing;
export type { PointData };
