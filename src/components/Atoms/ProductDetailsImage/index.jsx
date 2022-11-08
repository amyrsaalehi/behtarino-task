import Image from "next/image";

export default function ProductDetailsImage({ image, title }) {
  return (
    <div className="relative w-full xl:min-w-96 xl:max-w-xs h-[500px] xl:h-screen bg-gradient-to-t from-primary to-primary/60">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 xl:left-1/2 xl:w-52 xl:h-52">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          priority
          className="object-contain"
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}
