"use client";

import Navigation from "../components/navigation";
// import Image from "next/image";
import { useParams } from "next/navigation";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";
import { useEffect, useRef, useState } from "react";
import Modal from "../components/Modal";
import Link from "next/link";
import { RotatingLines } from "react-loader-spinner";
import Image from "react-image-enlarger";

export const allImages = [
  {
    id: 0,
    height: "100",
    width: "100",
    public_id: "1",
    format: "jpg",
    blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
    imageSrc: "/1.jpg",
  },
  {
    id: 1,
    height: "100",
    width: "100",
    public_id: "1",
    format: "jpg",
    blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
    imageSrc: "/2.png",
  },
  {
    id: 2,
    height: "100",
    width: "100",
    public_id: "1",
    format: "jpg",
    blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
    imageSrc: "/3.png",
  },
  {
    id: 3,
    height: "100",
    width: "100",
    public_id: "1",
    format: "jpg",
    blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
    imageSrc: "/4.jpg",
  },
  {
    id: 4,
    height: "100",
    width: "100",
    public_id: "1",
    format: "jpg",
    blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
    imageSrc: "/5.jpg",
  },
  {
    id: 5,
    height: "100",
    width: "100",
    public_id: "1",
    format: "jpg",
    blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
    imageSrc: "/6.jpg",
  },
  {
    id: 6,
    height: "100",
    width: "100",
    public_id: "1",
    format: "jpg",
    blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
    imageSrc: "/7.jpg",
  },
  {
    id: 7,
    height: "100",
    width: "100",
    public_id: "1",
    format: "jpg",
    blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
    imageSrc: "/8.jpg",
  },
  {
    id: 8,
    height: "100",
    width: "100",
    public_id: "1",
    format: "jpg",
    blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
    imageSrc: "/9.png",
  },
  {
    id: 9,
    height: "100",
    width: "100",
    public_id: "1",
    format: "jpg",
    blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
    imageSrc: "/10.jpg",
  },
  {
    id: 10,
    height: "100",
    width: "100",
    public_id: "1",
    format: "jpg",
    blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
    imageSrc: "/11.jpg",
  },
];

const images = [
  "/1.jpg",
  "/2.png",
  "/3.png",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.png",
  "/10.jpg",
  "/11.jpg",
];
function Paintings() {
  

  return (
    <>
      <main className="flex min-h-screen flex-col items-center ">
        <Navigation></Navigation>
        <div className="mx-auto mt-[50px] max-w-[1500px] p-4">
          <div className="c columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
            {images.map((image) => (
              <SingleSource key={image} src={image} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Paintings;
function SingleSource({ src }: { src: string }) {
  
  const [zoomed, setZoomed] = useState(false);

  return (
    <div style={{ margin: "0.25rem" }}>
      <Image
        style={{ width: "500px", height: "auto" }}
        zoomed={zoomed}
        src={src}
        onClick={() => setZoomed(true)}
        onRequestClose={() => setZoomed(false)}
        // renderLoading={<ReactLoading type={"cylon"} color="black" />}
      />
    </div>
  );
}
