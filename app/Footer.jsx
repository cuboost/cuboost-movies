import Image from "next/image";
import attributionImage from "../public/attribution.svg";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center gap-10 mt-20">
            <a href="https://www.themoviedb.org/" target="_blank">
                <Image src={attributionImage} alt="TMDB logo" draggable="false" className=" w-28 select-none" />
            </a>
            <p>
                This product uses the TMDB API but is not endorsed or certified by TMDB.
            </p>
        </footer>
    );
}
