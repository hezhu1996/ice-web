"use client";

import { useRouter } from "next/navigation";
import Navigation from "../components/navigation";
import Image from "next/image";
import { ice4 } from "@/assets";


export default function Contact() {
  const router = useRouter();
  const handleInstagram = (): void => {
    console.log("instagram");
    router.push("https://instagram.com/ruobing_liao?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr");
  };
  return (
    <main className="flex min-h-screen flex-col items-center px-4 sm:px-6">
      <Navigation />
      <div className="w-full max-w-[1000px] flex sm:flex-row flex-col-reverse mt-[30px] justify-between items-center text-black">
        <div className=" sm:w-1/2">
          <Image
            src={ice4}
            alt="Picture of the author"
            className="object-contain"
          />
        </div>
        <div className="sm:block sm:ml-[50px] sm:w-1/2">
          <div>
            <p>
              Please email me at &quot;liaoice3@gmail.com&quot; for a list of available
              work or other questions.
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
          <div className="my-[30px] flex flex-col">
            <h1 className="text-lg">Address</h1>
            <div className="space-y-1 text-gray-500">
              {/* <p>North York</p> */}
              <p>Toronto, Ontario</p>
              <p>liaoice3@gmail.com</p>
            </div>
          </div>
          {/* <div className="mt-[30px] flex flex-col">
            <h1 className="mb-[20px] text-lg">GALERIE MOKUM</h1>
            <div className="space-y-1 text-gray-500">
              <p>Oudezijds Voorburgwal 334</p>
              <p>1012 GM Amsterdam, The Netherlands</p>
              <p>contact@galeriemokum.com </p>
              <p>+31 (0)20 - 62 43 958</p>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
}
