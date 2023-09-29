type ResumeRowProps = {
    left: string;
    mid: string[];
    right?: string;
}

export const ResumeRow = ({left, mid, right}: ResumeRowProps): JSX.Element => {
  return (
    <>
      <div className="flex justify-items-start items-start w-[90%]">
        {/* left */}
        <div className="w-[400px]">
          <p className="text-black">{left}</p>
        </div>
        {/* mid */}
        <div className="flex flex-col w-[400px] space-y-5">
            {mid.map((item) => (
                <p className="text-black ">{item}</p>
            ))}
        </div>
        {/* right */}
        <div className="w-[150px] pl-[50px]">
          <p className="text-black">{right}</p>
        </div>
      </div>
    </>
  );
};
