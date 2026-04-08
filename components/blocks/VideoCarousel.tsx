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
    <div className="space-y-4">
      <Carousel
        opts={{ loop: true }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {videos.map((v, i) => (
            <CarouselItem key={i}>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl bg-black">
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

        {/* Arrows — positioned inside, not outside (no -left-12 overflow issue) */}
        <CarouselPrevious className="-left-0 left-3 bg-black/50 border-white/20 text-white hover:bg-black/70 hover:text-white" />
        <CarouselNext    className="-right-0 right-3 bg-black/50 border-white/20 text-white hover:bg-black/70 hover:text-white" />
      </Carousel>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2">
        {videos.map((v, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`transition-all rounded-full ${
              current === i
                ? "w-6 h-2 bg-primary"
                : "w-2 h-2 bg-text/20 hover:bg-text/40"
            }`}
            aria-label={v.label}
          />
        ))}
      </div>
    </div>
  )
}
