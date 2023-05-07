import { FiTrendingUp } from "react-icons/fi";
import { BsFillHandThumbsUpFill, BsFillCalendarEventFill } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1 className=" text-5xl font-medium mb-16">Home</h1>

            <div className="grid gap-16 grid-cols-2 md:grid-cols-3 w-full">
                <Link className=" bg-gradient-to-br from-teal-500 to-cyan-600 p-10 flex justify-center items-center flex-col gap-5 text-slate-100 rounded-3xl cursor-pointer hover:scale-105 transition" href={"/popular"}>
                    <FiTrendingUp className="text-6xl" />
                    <h2 className="text-xl">Popular</h2>
                </Link>
                <Link className=" bg-gradient-to-br from-teal-500 to-cyan-600 p-10 flex justify-center items-center flex-col gap-5 text-slate-100 rounded-3xl cursor-pointer hover:scale-105 transition" href={"/top-rated"}>
                    <BsFillHandThumbsUpFill className="text-6xl" />
                    <h2 className="text-xl">Top Rated</h2>
                </Link>
                <Link className=" bg-gradient-to-br from-teal-500 to-cyan-600 p-10 flex justify-center items-center flex-col gap-5 text-slate-100 rounded-3xl cursor-pointer hover:scale-105 transition" href={"/upcoming"}>
                    <BsFillCalendarEventFill className="text-6xl" />
                    <h2 className="text-xl">Upcoming</h2>
                </Link>
            </div>

        </div>
    );
}
