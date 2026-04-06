"use client"

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const markers = [
  { name: "Brasil", coordinates: [-48.5, -27.6] as [number, number] },
  { name: "Estados Unidos", coordinates: [-95.7, 37.1] as [number, number] },
]

export default function WorldMap() {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 120, center: [10, 20] }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#ea580c"
              stroke="#c2410c"
              strokeWidth={0.5}
              style={{
                default: { outline: "none" },
                hover: { fill: "#f97316", outline: "none" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      {markers.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={6} fill="white" stroke="#ea580c" strokeWidth={2} />
          <circle r={3} fill="#ea580c" />
        </Marker>
      ))}
    </ComposableMap>
  )
}
