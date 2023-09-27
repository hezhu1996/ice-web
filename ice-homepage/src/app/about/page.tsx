import Navigation from "../components/navigation";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Navigation></Navigation>
      <div className="mt-[50px] flex max-w-[1000px] flex-row items-center justify-between">
        <div className="mr-[50px] flex flex-col h-[300px] w-3/5  text-[20px]">
          <p className="text-[25px]">Ice Liao</p>
          <p>
            An oil painter from Pittsburgh, Pa. He earned his Bachelor of Art
            with a minor in Art history from Indiana University of Pennsylvania.
            Since graduation he has pursued his career through participation in
            solo, group and juried shows in and around the Pittsburgh area. In
            2017 he was selected to be an artist in residence at the Brew House
            Association in the Distillery 8 program.{" "}
          </p>
        </div>
        <div className="relative h-[300px] w-3/5">
          <Image src={"/2.png"} alt="test" layout="fill"  />
        </div>
      </div>
    </main>
  );
}
