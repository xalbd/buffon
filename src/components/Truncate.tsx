interface TruncateProps {
  truncate: number;
  setTruncate: (truncate: number) => void;
  isTruncated: boolean;
  setIsTruncated: (isTruncated: boolean) => void;
}

function Truncate({
  truncate,
  setTruncate,
  isTruncated,
  setIsTruncated,
}: TruncateProps) {
  return (
    <div className="space-x-2 flex items-center">
      <input
        type="checkbox"
        className="checkbox checkbox-accent"
        checked={isTruncated}
        disabled={!truncate || truncate < 1}
        onChange={(e) => setIsTruncated(e.target.checked)}
        id="truncate"
      />
      <label htmlFor="truncate" className="ml-2">
        Truncate Output
      </label>
      <input
        type="number"
        placeholder="Truncate to..."
        className="input input-bordered ml-2 w-36"
        value={truncate}
        disabled={!isTruncated}
        min={1}
        onChange={(e) => {
          setTruncate(parseInt(e.target.value, 10));
        }}
      />
    </div>
  );
}

export default Truncate;
