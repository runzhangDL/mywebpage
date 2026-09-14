export default function Video({
  src,
  caption,
}: {
  src: string;
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full rounded-xl border border-line bg-surface"
      >
        <source src={src} type="video/mp4" />
        Your browser doesn&apos;t support the video tag.
      </video>
      {caption ? (
        <figcaption className="mt-3 text-center text-sm text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
