import Navigation from "../components/navigation";
import Image from "next/image";
import { iceAvatar } from "src/app/assets";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Navigation></Navigation>
      <div className="sm:mt-[50px] flex max-w-[1000px] flex-col items-center justify-between sm:flex-row space-y-5">
        <div className="flex flex-col mx-5 sm:text-[20px] text-black justify-center items-center sm:mr-[50px] sm:h-[300px] sm:w-3/5">
          <p className="hidden sm:block sm:text-[25px]">Ruobing Liao</p>
          <p className="flex justify-center items-center break-words">
            Ruobing Liao is a Toronto-based contemporary artist with a
            distinguished Honours Bachelor of Illustration degree from Sheridan
            College. She specializes in creating striking oil paintings on
            canvas and delicate watercolors on paper. Through her art, Ruobing
            actively explores the intricate connections between plants and
            humans, as well as the boundaries between dreams and reality. She
            believes that depicting dreams serves as a vital nourishment for her
            spiritual realm that supplies her inspirations.{" "}
          </p>
        </div>
        <div className="mx-5 sm:relative sm:h-[300px] sm:w-3/5">
          <Image
            src={iceAvatar}
            alt="ruobingliao"
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
}
