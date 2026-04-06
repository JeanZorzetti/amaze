"use client"

import Masonry from "react-masonry-css"

const images = [
  { src: "/images/gallery/SaveClip.App_598635946_17877354609448342_3340277087935498923_n.jpg", alt: "Inflável personalizado 1" },
  { src: "/images/gallery/SaveClip.App_589648017_17876804814448342_8600020723861108054_n.jpg", alt: "Inflável personalizado 2" },
  { src: "/images/gallery/SaveClip.App_598834557_17877354591448342_4532624735367015725_n.jpg", alt: "Inflável personalizado 3" },
  { src: "/images/gallery/SaveClip.App_598904006_17877354627448342_7377931598932079293_n.jpg", alt: "Inflável personalizado 4" },
  { src: "/images/gallery/SaveClip.App_598409687_17877354618448342_6209046712205705990_n.jpg", alt: "Inflável personalizado 5" },
  { src: "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg", alt: "Inflável personalizado 6" },
  { src: "/images/gallery/SaveClip.App_632153979_17885887683448342_7600628157039576746_n.jpg", alt: "Inflável personalizado 7" },
  { src: "/images/gallery/SaveClip.App_598989249_17877354600448342_7726145296482408610_n.jpg", alt: "Inflável personalizado 8" },
]

const breakpoints = {
  default: 3,
  768: 2,
  480: 1,
}

export default function GalleryMosaic() {
  return (
    <section className="w-full overflow-hidden">
      <Masonry
        breakpointCols={breakpoints}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {images.map((img, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            loading="lazy"
          />
        ))}
      </Masonry>
    </section>
  )
}
