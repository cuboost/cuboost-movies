import { BsCheckCircleFill, BsFillClockFill, BsFillCalendarCheckFill, BsFillHandThumbsUpFill } from "react-icons/bs";
import { RiParentFill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";

export default function Info({ data }) {
    return (
        <div className="relative grid grid-cols-3 sm:flex items-start justify-evenly sm:-top-14 xl:top-0 my-10 sm:my-2 backdrop-blur-md bg-slate-300/40 pt-3 w-full sm:w-4/5 mx-auto rounded-2xl">
            {/* Released */}
            {data.status == "Released" && (
                <div className="flex flex-col p-2 mb-3 justify-center items-center">
                    <BsCheckCircleFill className="text-3xl mb-2" />
                    <h3 className="font-medium">Released</h3>
                </div>
            )}

            {/* Minutes */}
            <div className="flex flex-col p-2 mb-3 justify-center items-center">
                <BsFillClockFill className="text-3xl mb-2" />
                <h3 className="font-medium">{data.runtime} min</h3>
            </div>

            {/* Release Date */}
            <div className="flex flex-col p-2 mb-3 justify-center items-center">
                <BsFillCalendarCheckFill className="text-3xl mb-2" />
                <h3 className="font-medium">{data.release_date}</h3>
            </div>

            {/* Rating */}
            <div className="flex flex-col p-2 mb-3 justify-center items-center">
                <BsFillHandThumbsUpFill className="text-3xl mb-2" />
                <h3 className="font-medium">{data.vote_average}</h3>
            </div>

            {/* Family */}
            {!data.adult && (
                <div className="flex flex-col p-2 mb-3 justify-center items-center">
                    <RiParentFill className="text-3xl mb-2" />
                    <h3 className="font-medium">Family</h3>
                </div>
            )}

            {/* Family */}
            <div className="flex flex-col p-2 mb-3 justify-center items-center">
                <BiWorld className="text-3xl mb-2" />
                <h3 className="font-medium">{data.original_language}</h3>
            </div>
        </div>
    );
}
