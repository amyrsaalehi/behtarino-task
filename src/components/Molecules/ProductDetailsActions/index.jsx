import ShareButton from "src/components/Atoms/ShareButton";

export default function ProductDetailsActions() {
  return (
    <div className="w-full flex justify-between mt-4">
      <button className="btn btn-primary uppercase">Add to card</button>
      <ShareButton />
    </div>
  );
}
