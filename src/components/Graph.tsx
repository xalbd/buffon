import { ResponsiveLineCanvas } from "@nivo/line";

type GraphData = Array<{
  x: number;
  y: number | null;
}>;

interface GraphProps {
  data: GraphData;
}

function Graph({ data }: GraphProps) {
  return (
    <div className="bg-white">
      <ResponsiveLineCanvas
        data={[{ id: 1, data }]}
        margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
        xScale={{ type: "linear", min: 1, max: "auto" }}
        yScale={{ type: "linear", min: 0, max: "auto" }}
        axisBottom={{
          legend: "# of needles",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend: "π",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enablePoints={false}
        isInteractive={false}
      />
    </div>
  );
}

export default Graph;
export type { GraphData };
