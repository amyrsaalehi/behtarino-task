export default function ProductDetailsDescription({ description }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="uppercase font-semibold mt-2">Description</h2>
      <p className="text-base-content/50 text-sm">{description}</p>
    </div>
  );
}
