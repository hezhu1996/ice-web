import Navigation from "../components/navigation";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Navigation></Navigation>
      <div className="mt-[50px] flex max-w-[1000px] flex-row items-center justify-between">
        <div className="mr-[50px] flex flex-col h-[300px] w-3/5  text-[20px] text-black">
          <p className="text-[25px]">Ice Liao</p>
          <p>
          Ruobing Liao is a Toronto-based contemporary artist with a distinguished Honours Bachelor of Illustration degree from Sheridan College. She specializes in creating striking oil paintings on canvas and delicate watercolors on paper. Through her art, Ruobing actively explores the intricate connections between plants and humans, as well as the boundaries between dreams and reality. She believes that depicting dreams serves as a vital nourishment for her spiritual realm.{" "}
          </p>
        </div>
        <div className="relative h-[300px] w-3/5 mt-[60px]">
          <Image src={"/ice1.jpg"} alt="test" layout="fill"  />
        </div>
      </div>
    </main>
  );
}
