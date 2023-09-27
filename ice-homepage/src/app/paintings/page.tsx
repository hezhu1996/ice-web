"use client";

import Navigation from "../components/navigation";
import Image from "next/image";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";
import { useEffect, useRef } from "react";
import Modal from "../components/Modal";
import Link from "next/link";
import { RotatingLines } from "react-loader-spinner";

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
];
function Paintings() {
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  const { photoId } = useParams();
  console.log("Paintings::photoId: ", photoId);

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current?.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-white">
        <Navigation></Navigation>
        <div className="mx-auto mt-[50px] max-w-[1000px] p-4">
          {/* {photoId && (
            <Modal
              images={images}
              onClose={() => {
                setLastViewedPhoto(photoId as any);
              }}
            />
          )} */}
          <div className="c columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
            {allImages.map(({ id, blurDataUrl, imageSrc }) => (
              <Link
                className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
                key={id}
                href={`/?photoId=${id}`}
                as={`/p/${id}`}
                ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
                shallow
              >
                <Image
                  alt="Ice painting"
                  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                  style={{ transform: "translate3d(0,0,0" }}
                  blurDataURL={blurDataUrl}
                  src={imageSrc}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Paintings;

export async function getData() {
  return {
    props: {
      images: [
        {
          id: 0,
          height: "100",
          width: "100",
          public_id: "1",
          format: "jpg",
          blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
        },
        {
          id: 0,
          height: "100",
          width: "100",
          public_id: "1",
          format: "jpg",
          blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
        },
        {
          id: 0,
          height: "100",
          width: "100",
          public_id: "1",
          format: "jpg",
          blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
        },
        {
          id: 0,
          height: "100",
          width: "100",
          public_id: "1",
          format: "jpg",
          blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
        },
        {
          id: 0,
          height: "100",
          width: "100",
          public_id: "1",
          format: "jpg",
          blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
        },
        {
          id: 0,
          height: "100",
          width: "100",
          public_id: "1",
          format: "jpg",
          blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
        },
        {
          id: 0,
          height: "100",
          width: "100",
          public_id: "1",
          format: "jpg",
          blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
        },
        {
          id: 0,
          height: "100",
          width: "100",
          public_id: "1",
          format: "jpg",
          blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
        },
        {
          id: 0,
          height: "100",
          width: "100",
          public_id: "1",
          format: "jpg",
          blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
        },
        {
          id: 0,
          height: "100",
          width: "100",
          public_id: "1",
          format: "jpg",
          blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
        },
        {
          id: 0,
          height: "100",
          width: "100",
          public_id: "1",
          format: "jpg",
          blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
        },
        {
          id: 0,
          height: "100",
          width: "100",
          public_id: "1",
          format: "jpg",
          blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
        },
        {
          id: 0,
          height: "100",
          width: "100",
          public_id: "1",
          format: "jpg",
          blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
        },
        {
          id: 0,
          height: "100",
          width: "100",
          public_id: "1",
          format: "jpg",
          blurDataUrl: "https://w.wallhaven.cc/full/x6/wallhaven-x6pl9v.jpg",
        },
      ],
    },
  };
}
