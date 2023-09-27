import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  ArrowUturnLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import { range } from "../utils/range";
import type { ImageProps, SharedModalProps } from "../utils/types";

import { variants } from "../utils/animationVariants";
import Twitter from "./Icons/Twitter";
import { RotatingLines } from "react-loader-spinner";

export default function SharedModal({
  index,
  images,
  changePhotoId,
  closeModal,
  navigation,
  currentPhoto,
  direction,
}: SharedModalProps) {
  const [loaded, setLoaded] = useState(false);

  let filteredImages = images?.filter((img: ImageProps) =>
    range(index - 15, index + 15).includes(img.id)
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (images && index < images?.length - 1) {
        changePhotoId(index + 1);
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1);
      }
    },
    trackMouse: true,
  });

  let currentImage = images ? images[index] : currentPhoto;
  // console.log("currentPhoto: ", currentPhoto);
  // console.log("images: ", images);
  // console.log("index: ", index);
  console.log("loaded: ", loaded);

  // return loaded ? (
  //   <MotionConfig
  //     transition={{
  //       x: { type: "spring", stiffness: 300, damping: 30 },
  //       opacity: { duration: 0.2 },
  //     }}
  //   >
  //     <div
  //       className="wide:h-full xl:taller-than-854:h-auto relative z-50 flex aspect-[3/2] w-full max-w-7xl items-center"
  //       {...handlers}
  //     >
  //       {/* Main image */}
  //       <div className="w-full overflow-hidden">
  //         <div className="relative flex aspect-[3/2] items-center justify-center">
  //           {}
  //           <AnimatePresence initial={false} custom={direction}>
  //             <motion.div
  //               key={index}
  //               custom={direction}
  //               variants={variants}
  //               initial="enter"
  //               animate="center"
  //               exit="exit"
  //               className="absolute"
  //             >
  //               <Image
  //                 src={currentImage?.imageSrc ?? ""}
  //                 width={navigation ? 1280 : 1920}
  //                 height={navigation ? 853 : 1280}
  //                 priority
  //                 alt="Next.js Conf image"
  //                 onLoadingComplete={() => setLoaded(true)}
  //               />
  //             </motion.div>
  //           </AnimatePresence>

  //       </div>
  //     </div>
  //   </MotionConfig>
  // ) : (
  //   <RotatingLines
  //     strokeColor="grey"
  //     strokeWidth="5"
  //     animationDuration="0.75"
  //     width="96"
  //     visible={true}
  //   />
  // );

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        className="wide:h-full xl:taller-than-854:h-auto relative z-50 flex aspect-[3/2] w-full max-w-7xl items-center"
        {...handlers}
      >
        {/* Main image */}
        <div className="w-full overflow-hidden">
          <div className="relative flex aspect-[3/2] items-center justify-center">
            {}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute"
              >
                <Image
                  src={currentImage?.imageSrc ?? ""}
                  width={navigation ? 1280 : 1920}
                  height={navigation ? 853 : 1280}
                  priority
                  alt="Next.js Conf image"
                  onLoadingComplete={() => setLoaded(true)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
