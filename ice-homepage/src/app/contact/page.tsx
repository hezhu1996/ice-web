"use client";

import { useRouter } from "next/navigation";
import Navigation from "../components/navigation";
import Image from "next/image";
export default function Contact() {
  const router = useRouter();
  const handleInstagram = (): void => {
    console.log("instagram");
    router.push("https://www.instagram.com/zoeyfrank/");
  };
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Navigation></Navigation>
      <div className="mt-[50px] flex  w-[1000px] justify-between text-black">
        <div className="w-1/2">
          <Image
            src="/ice4.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="ml-[50px] w-1/2">
          <div>
            <p>
              Please email me at "zoey@zoeyfrank.com" for a list of available
              work or other questions, and join my mailing list below to hear
              about upcoming exhibitions.
            </p>
          </div>
          <div className="flex items-center justify-start">
            <div
              className="mt-[30px] flex cursor-pointer flex-row items-center"
              onClick={handleInstagram}
            >
              <Image
                src="/instagram.png"
                alt="Picture of the author"
                width={30}
                height={30}
              />
              <p className="ml-[10px] text-gray-500">Ruobing Liao</p>
            </div>
          </div>
          <div className="mt-[30px] flex flex-col">
            <h1 className="mb-[20px] text-lg">SUGARLIFT</h1>
            <div className="space-y-1 text-gray-500">
              <p>North York</p>
              <p>Toronto, Ontario</p>
              <p>hello@sugarlift.com </p>
            </div>
          </div>
          <div className="mt-[30px] flex flex-col">
            <h1 className="mb-[20px] text-lg">GALERIE MOKUM</h1>
            <div className="space-y-1 text-gray-500">
              <p>Oudezijds Voorburgwal 334</p>
              <p>1012 GM Amsterdam, The Netherlands</p>
              <p>contact@galeriemokum.com </p>
              <p>+31 (0)20 - 62 43 958</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
