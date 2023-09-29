import { ResumeRow } from "../components/ResumeRow";
import Navigation from "../components/navigation";


export default function CV() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Navigation></Navigation>

      <div className="mx-auto mt-[50px] flex w-[1000px] flex-col items-center justify-center space-y-[50px]">
        <ResumeRow
          left="Education"
          mid={[
            "Indiana University of Pennsylvania",
            "B.A. Studio Arts, Minor Art History",
          ]}
          right=""
        ></ResumeRow>
        <ResumeRow
          left="Solo Exhibitions"
          mid={[
            "Notes from the River Nadir UnSmoke Systems, Braddock Pa. 2022",
            "Tony Havrilla Christine Frechard Gallery, Pittsburgh Pa. 2016",
          ]}
          right=""
        ></ResumeRow>
        <ResumeRow
          left="Selected Group Exhibitions"
          mid={[
            `"2020 AAP New Member Exhibition" Juried: STABLE Arts D.C. Brew House Association, Pittsburgh Pa. 2020`,
            `"Dollar Bank Three Rivers Arts Fetival's Juried Visual Art Exhibition" Trust Arts Education Center, Pittsburgh Pa. 2019`,
            `"Distillery 8 Group Exhibition" Brew House Association, Pittsburgh Pa. 2018`
          ]}
          right=""
        ></ResumeRow>
        <ResumeRow
          left="Experience"
          mid={[
            `"Distillery 8" Artist in Residence, Brew`,
            `House Association, Pittsburgh Pa. `
          ]}
          right="2017-2018"
        ></ResumeRow>
        <ResumeRow
          left="Awards"
          mid={[
            `"Art Talk: Tony Havrilla" Christine Frechard Gallery, Pittsburgh Pa. 2016`,
          ]}
        ></ResumeRow>
      </div>
    </main>
  );
}
