import { ResponsiveLine } from "@nivo/line";

type GraphData = Array<{
  x: number;
  y: number | null;
}>;

interface GraphProps {
  data: GraphData;
}

function Graph({ data }: GraphProps) {
  return (
    <div className="rounded-md min-w-0 basis-2/3">
      <ResponsiveLine
        data={[{ id: 1, data }]}
        theme={{
          axis: {
            legend: { text: { fontSize: 18 } },
            ticks: { text: { fontSize: 15 } },
          },
          background: "white",
        }}
        margin={{ top: 20, right: 40, bottom: 55, left: 50 }}
        xScale={{ type: "linear", min: "auto", max: "auto" }}
        yScale={{ type: "linear", min: 0, max: 6 }}
        axisBottom={{
          legend: "# of needles",
          legendOffset: 40,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend: "estimated π",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        markers={[
          {
            axis: "y",
            value: Math.PI,
            legend: "π",
            lineStyle: {
              stroke: "#333333",
            },
            textStyle: {
              fill: "#333333",
            },
          },
        ]}
        animate={false}
        enablePoints={false}
        isInteractive={false}
      />
    </div>
  );
}

export default Graph;
export type { GraphData };
