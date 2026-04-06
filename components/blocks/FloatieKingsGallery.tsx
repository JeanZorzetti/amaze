"use client"

import Image from "next/image"

const images = [
  { src: "/images/gallery/SaveClip.App_598635946_17877354609448342_3340277087935498923_n.jpg", alt: "Inflável personalizado 1" },
  { src: "/images/gallery/SaveClip.App_589648017_17876804814448342_8600020723861108054_n.jpg", alt: "Inflável personalizado 2" },
  { src: "/images/gallery/SaveClip.App_598834557_17877354591448342_4532624735367015725_n.jpg", alt: "Inflável personalizado 3" },
  { src: "/images/gallery/SaveClip.App_598904006_17877354627448342_7377931598932079293_n.jpg", alt: "Inflável personalizado 4" },
  { src: "/images/gallery/SaveClip.App_598409687_17877354618448342_6209046712205705990_n.jpg", alt: "Inflável personalizado 5" },
  { src: "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg", alt: "Inflável personalizado 6" },
  { src: "/images/gallery/SaveClip.App_632153979_17885887683448342_7600628157039576746_n.jpg", alt: "Inflável personalizado 7" }
]

export default function FloatieKingsGallery() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px] gap-2 md:gap-4 lg:gap-6">
          
          {/* Item 1: WPI Arch (top left, spans 2 cols) */}
          <div className="col-span-2 md:col-span-2 md:row-span-1 relative overflow-hidden group">
            <Image 
              src={images[0].src} 
              alt={images[0].alt} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

          {/* Item 2: Jet Ski (top right 1) */}
          <div className="col-span-1 md:col-span-1 md:row-span-1 relative overflow-hidden group">
            <Image 
              src={images[1].src} 
              alt={images[1].alt} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

          {/* Item 3: Vodka (top right 2, spans 2 rows) */}
          <div className="col-span-1 md:col-span-1 row-span-2 md:row-span-2 relative overflow-hidden group">
            <Image 
              src={images[2].src} 
              alt={images[2].alt} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

          {/* Item 4: Brain (mid left) */}
          <div className="col-span-1 md:col-span-1 md:row-span-1 relative overflow-hidden group">
            <Image 
              src={images[3].src} 
              alt={images[3].alt} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

          {/* Item 5: Helmet (mid center, spans 2 cols, 2 rows) */}
          <div className="col-span-2 md:col-span-2 row-span-2 md:row-span-2 relative overflow-hidden group">
            <Image 
              src={images[4].src} 
              alt={images[4].alt} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

          {/* Item 6: Lemon (bot left) */}
          <div className="col-span-1 md:col-span-1 md:row-span-1 relative overflow-hidden group">
            <Image 
              src={images[5].src} 
              alt={images[5].alt} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

          {/* Item 7: Chef (bot right) */}
          <div className="col-span-1 md:col-span-1 md:row-span-1 relative overflow-hidden group">
            <Image 
              src={images[6].src} 
              alt={images[6].alt} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

        </div>
      </div>
    </section>
  )
}
