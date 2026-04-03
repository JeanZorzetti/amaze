"use client"

import Image from "next/image"
import {
  ContainerScroll,
  ContainerSticky,
  GalleryContainer,
  GalleryCol,
} from "@/components/blocks/animated-gallery"

const IMAGES_1 = [
  "/images/gallery/SaveClip.App_588050369_17875356303448342_4763558584539654616_n.jpg",
  "/images/gallery/SaveClip.App_589642225_17876804805448342_7097452702531659399_n.jpg",
  "/images/gallery/SaveClip.App_589648017_17876804814448342_8600020723861108054_n.jpg",
  "/images/gallery/SaveClip.App_598409687_17877354618448342_6209046712205705990_n.jpg",
]

const IMAGES_2 = [
  "/images/gallery/SaveClip.App_598635946_17877354609448342_3340277087935498923_n.jpg",
  "/images/gallery/SaveClip.App_598834557_17877354591448342_4532624735367015725_n.jpg",
  "/images/gallery/SaveClip.App_598904006_17877354627448342_7377931598932079293_n.jpg",
  "/images/gallery/SaveClip.App_598989249_17877354600448342_7726145296482408610_n.jpg",
]

const IMAGES_3 = [
  "/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg",
  "/images/gallery/SaveClip.App_606337516_17878831950448342_3141222151768433182_n.jpg",
  "/images/gallery/SaveClip.App_632153979_17885887683448342_7600628157039576746_n.jpg",
  "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg",
]

export default function AmazeGallery() {
  return (
    <ContainerScroll>
      <ContainerSticky>
        <GalleryContainer>
          <GalleryCol yRange={["0%", "-15%"]}>
            {IMAGES_1.map((src, i) => (
              <div key={i} className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={src}
                  alt={`Amaze inflatable project ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </GalleryCol>

          <GalleryCol yRange={["-5%", "-20%"]}>
            {IMAGES_2.map((src, i) => (
              <div key={i} className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={src}
                  alt={`Amaze inflatable project ${i + 5}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </GalleryCol>

          <GalleryCol yRange={["0%", "-15%"]}>
            {IMAGES_3.map((src, i) => (
              <div key={i} className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={src}
                  alt={`Amaze inflatable project ${i + 9}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </GalleryCol>
        </GalleryContainer>
      </ContainerSticky>
    </ContainerScroll>
  )
}
