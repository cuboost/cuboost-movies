import Image from "next/image";
import { RiMovie2Fill } from "react-icons/ri";

export default function ProductionCompanies({ name, logo }) {

    // Path
    const imagePath = "https://image.tmdb.org/t/p/original";

    return (
        <div className="flex justify-center items-center flex-col gap-2">
            {/* Logo */}
            {logo ? (<Image src={imagePath + logo} alt={name + " Logo"} width={150} height={150} className=" w-14 h-14 rounded-full object-cover select-none grayscale" draggable="false" />) : (<RiMovie2Fill className="w-14 h-14 p-2" />)}

            {/* Name */}
            <h2 className="text-sm w-24 h-10 text-ellipsis overflow-hidden">{name}</h2>
        </div>
    );
}
