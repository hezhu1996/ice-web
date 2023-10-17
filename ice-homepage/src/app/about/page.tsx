import Navigation from "../components/navigation";
import Image from "next/image";
import { iceAvatar } from "src/app/assets";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Navigation></Navigation>
      <div className="mt-[50px] flex max-w-[1000px] flex-col items-center justify-between sm:flex-row">
        <div className="mr-[50px] flex sm:h-[300px] sm:w-3/5 flex-col text-[20px] text-black justify-center items-center ml-5">
          <p className="text-[25px]">Ice Liao</p>
          <p>
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
        <div className="sm:relative sm:h-[300px] sm:w-3/5">
          <Image
            src={iceAvatar}
            alt="test"
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
}
