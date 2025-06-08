import Navigation from "../components/navigation";
import Image from "next/image";
import { iceAvatar, iceAvatar2} from "src/app/assets";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 sm:px-6">
      <Navigation></Navigation>
      <div className="w-full max-w-[1000px] mt-16 sm:mt-[150px]">
        <div className="flex flex-col items-start justify-between sm:flex-row space-y-8 sm:space-y-0 mb-16 sm:mb-[100px]">
          <div className="flex flex-col sm:text-[20px] text-black justify-center sm:mr-[50px] sm:h-[300px] sm:w-2/3 w-full">
            <p className="sm:text-2xl text-2xl mb-4 font-bold text-left">Ruobing Liao</p>
            <p className="text-left sm:text-justify break-words leading-relaxed">
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
          <div className="flex justify-center items-center sm:h-[300px] sm:w-1/3">
            <Image
              src={iceAvatar}
              alt="ruobingliao"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-between sm:flex-row space-y-8 sm:space-y-0">
          <div className="flex flex-col sm:text-[20px] text-black justify-center sm:mr-[50px] sm:h-[300px] sm:w-2/3 w-full">
            <h2 className="text-2xl font-bold mb-4 text-black text-left">Exhibitions</h2>
            <p className="mb-4 text-black text-left">
              2024 Artist Project, Better Living Centre, Toronto, ON
            </p>
            <p className="mb-4 text-black text-left">
              2024 RAW artist Glitch, Parkdale hall, Toronto, ON
            </p>
            <p className="text-black text-left">
              2025 Artist Project, Better Living Centre, Toronto, Ontario
            </p>
          </div>
          <div className="flex justify-center items-center sm:h-[300px] sm:w-1/3">
            <Image
              src={iceAvatar2}
              alt="ruobingliao"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>

    </main>
  );
}
