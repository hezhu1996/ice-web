"use client";

import Carousel from "@/app/components/Carousel";
import { ImageProps } from "@/app/utils/types";
import Head from "next/head";
import { useParams, usePathname, useSearchParams } from "next/navigation";

const Picture = () => {
  //   const photoId = useSearchParams().get("p");
  //   console.log('Picture::photoId: ', photoId)

  //   const pathname = usePathname()
  //   console.log('Picture::pathname: ', pathname)

  const { photoId } = useParams();
  console.log("Picture::photoId: ", photoId);

  let index = Number(photoId);

  const currentPhotoUrl = `https://w.wallhaven.cc/full/l8/wallhaven-l8dpvy.jpg`;

  const currentPhoto = {
    id: 0,
    height: "100",
    width: "100",
    public_id: "1",
    format: "jpg",
    blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
    imageSrc: `/${photoId}.jpg`,
  };
  return (
    <>
      <Head>
        <title>Next.js Conf 2022 Photos</title>
        <meta property="og:image" content={currentPhotoUrl} />
        <meta name="twitter:image" content={currentPhotoUrl} />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={currentPhoto} index={index} />
      </main>
    </>
  );
};

export default Picture;
