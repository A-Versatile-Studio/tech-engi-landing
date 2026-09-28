import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData | string;
  alt: string;
  heading: string;
  highlight: string;
  body: string;
  points: string[];
  reverse?: boolean;
  rotateOnScroll?: boolean;
};

export default function SplitFeature({
  image,
  alt,
  heading,
  highlight,
  body,
  points,
  reverse = false,
  rotateOnScroll = false,
}: Props) {
  return (
    <section>
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-8 md:grid-cols-2 md:gap-24">
        <div className={`reveal ${reverse ? "md:order-2" : ""}`}>
          <Image
            src={image}
            alt={alt}
            width={620}
            height={560}
            className="parallax w-full max-w-none md:w-[120%] md:-ml-[10%]"
            data-rot={rotateOnScroll ? "1" : undefined}
          />
        </div>
        <div className="reveal">
          <h2 className="text-[clamp(2.4rem,4.6vw,3.9rem)]">
            {heading} <span className="text-mut">{highlight}</span>
          </h2>
          <p className="text-[1.2rem]">{body}</p>
          <ul className="check-list text-[1.1rem]">
            {points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
