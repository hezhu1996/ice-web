import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <div className="flex flex-col items-center mt-[50px]">
        <div className="mb-5 text-black">
          <Link href="/homepage">
            <h1 className="text-4xl font-bold">ICE LIAO</h1>
          </Link>
        </div>
        <div className="flex space-x-4 text-black">
          <li className="list-none">
            <Link href="/homepage">Home</Link>
          </li>
          <li className="list-none">
            <Link href="/paintings">Paintings</Link>
          </li>
          <li className="list-none">
            <Link href="/cv">CV</Link>
          </li>
          <li className="list-none">
            <Link href="/about">About</Link>
          </li>
          <li className="list-none">
            <Link href="/store">Store</Link>
          </li>
          <li className="list-none">
            <Link href="/contact">Contact</Link>
          </li>
        </div>
      </div>
    </>
  );
}
