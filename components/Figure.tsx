import Image from "next/image";

type FigureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  priority?: boolean;
};

export default function Figure({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
}: FigureProps) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-xl border border-line bg-white">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 768px"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
