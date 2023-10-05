"use client";

import Navigation from "../components/navigation";
import { useState } from "react";
import Image from "react-image-enlarger";

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
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
