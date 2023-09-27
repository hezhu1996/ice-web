import Navigation from "../components/navigation";
import Image from 'next/image'


export default function Homepage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Navigation></Navigation>
      <Image
                  src={'/8.jpg'}
                  height={1000}
                  width={1000}
                  alt="Next.js Conf image"
                />
    </main>
  );
}
