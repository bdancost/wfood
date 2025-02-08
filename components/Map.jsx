"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

// leaflet css
import "leaflet/dist/leaflet.css";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const markers = [
  {
    position: [34.052235, -118.243683],
    title: "Location 1",
    sutitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/map/1.png",
  },
  {
    position: [33.9748, -118.3356],
    title: "Location 2",
    sutitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/map/2.png",
  },
  {
    position: [34.0211, -118.3965],
    title: "Location 3",
    sutitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/map/3.png",
  },
];

const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});

const Map = () => {
  return (
    <div>
      <MapContainer
        center={[34.052235, -118.243683]}
        zoom={10}
        className="z-10 h-[900px]"
        zoomControl={false}
      >
        <TileLayer
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
      </MapContainer>
    </div>
  );
};

export default Map;
