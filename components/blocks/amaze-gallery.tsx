"use client"

import Image from "next/image"
import {
  ContainerScroll,
  ContainerSticky,
  GalleryContainer,
  GalleryCol,
} from "@/components/blocks/animated-gallery"

const IMAGES_1 = [
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&auto=format&fit=crop&q=60",
]

const IMAGES_2 = [
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&auto=format&fit=crop&q=60",
]

const IMAGES_3 = [
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=900&auto=format&fit=crop&q=60",
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
