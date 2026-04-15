"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/interfaces-carousel"

const videos = [
  { src: "/amaze-video.mp4", label: "Vídeo 01" },
  { src: "/amaze-video.mp4", label: "Vídeo 02" },
  { src: "/amaze-video.mp4", label: "Vídeo 03" },
]

export default function VideoCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <div>
      <Carousel
        opts={{ loop: true }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {videos.map((v, i) => (
            <CarouselItem key={i} className="pl-0">
              {/* aspect-video full-bleed — sem rounded, sem padding, como hero */}
              <div className="relative w-full aspect-video bg-black">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  src={v.src}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows sobrepostos ao vídeo */}
        <CarouselPrevious className="left-4 bg-black/50 border-white/20 text-white hover:bg-black/80 hover:text-white" />
        <CarouselNext    className="right-4 bg-black/50 border-white/20 text-white hover:bg-black/80 hover:text-white" />
      </Carousel>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 py-5">
        {videos.map((v, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`transition-all rounded-full ${
              current === i
                ? "w-6 h-2 bg-orange"
                : "w-2 h-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={v.label}
          />
        ))}
      </div>
    </div>
  )
}
