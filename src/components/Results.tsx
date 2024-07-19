interface ResultProps {
  needles: number;
  landed: number;
}

function Results({ needles, landed }: ResultProps) {
  return (
    <p className="mt-4 text-2xl text-right flex-1">
      <p className="text-5xl inline">{needles} </p>
      needles dropped <br />
      <p className="text-5xl inline">{landed} </p>
      landed on a line <br />
      <p className="text-5xl">π ≈ {(2 / (landed / needles)).toFixed(10)}</p>
    </p>
  );
}

export default Results;
