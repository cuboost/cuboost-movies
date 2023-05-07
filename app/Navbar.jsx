import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.svg";

export default function Navbar() {
    return (
        <div className="flex justify-between mx-10 w-full items-center mb-6">
            <Link href={"/"}>
                <Image src={logo} alt="Logo" className=" w-20 select-none" draggable="false" />
            </Link>
            <div className="flex justify-center text-xl gap-4">
                <Link href={"/popular"} className="hover:text-cyan-600 transition">
                    Popular
                </Link>
                <Link href={"/top-rated"} className="hover:text-cyan-600 transition">
                    Top Rated
                </Link>
                <Link href={"/upcoming"} className="hover:text-cyan-600 transition">
                    Upcoming
                </Link>
            </div>
        </div>
    );
}
