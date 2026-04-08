"use client"

import { useState } from "react"

const videos = [
  { src: "/amaze-video.mp4", label: "Vídeo 01" },
  { src: "/amaze-video.mp4", label: "Vídeo 02" },
  { src: "/amaze-video.mp4", label: "Vídeo 03" },
]

export default function VideoCarousel() {
  const [active, setActive] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main video */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl bg-black">
        <video
          key={active}
          className="w-full h-full object-cover"
          controls
          playsInline
          preload="metadata"
          src={videos[active].src}
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-3">
        {videos.map((v, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative aspect-video rounded-lg overflow-hidden bg-black border-2 transition-all ${
              active === i ? "border-primary shadow-lg scale-[1.02]" : "border-transparent opacity-60 hover:opacity-90"
            }`}
          >
            <video
              className="w-full h-full object-cover pointer-events-none"
              playsInline
              preload="metadata"
              muted
              src={`${v.src}#t=2`}
            />
            {/* Play overlay */}
            {active !== i && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <svg className="size-8 text-white drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
            <span className="absolute bottom-1.5 left-2 text-white text-[0.6rem] font-black uppercase tracking-wider drop-shadow">
              {v.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
