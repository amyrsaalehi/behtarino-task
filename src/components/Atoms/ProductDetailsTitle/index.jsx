import testIds from "src/constants/testIds";

export default function ProductDetailsTitle({ title, discountRate }) {
  return (
    <div
      className="flex items-center gap-2"
      data-testid={testIds.PRODUCT_TITLE}
    >
      <h1 className="text-2xl text-base-content/80 font-bold">{title}</h1>
      <div className="badge badge-primary italic font-semibold">
        {discountRate}%
      </div>
    </div>
  );
}
