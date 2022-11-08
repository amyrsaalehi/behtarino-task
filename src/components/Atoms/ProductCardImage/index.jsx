import Image from "next/image";

export default function ProductCardImage({ image, title, priority }) {
  return (
    <figure className="relative">
      <Image
        className="aspect-square"
        src={image}
        alt={title}
        width={200}
        height={200}
        priority={priority}
      />
    </figure>
  );
}
