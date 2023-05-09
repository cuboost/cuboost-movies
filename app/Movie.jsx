import Image from "next/image";
import Link from "next/link";

export default function Movie({ title, id, poster_path, release_date }) {
    const imagePath = "https://image.tmdb.org/t/p/original";
    return (
        <div className="hover:scale-105 transition duration-200" id={id}>
            <Link href={`/${id}`}>
                <Image src={imagePath + poster_path} alt={title} width={800} height={800} draggable="false" className="rounded-3xl select-none" />
                <h1 className="my-2 font-semibold text-lg">{title}</h1>
                <h2>{release_date}</h2>
            </Link>
        </div>
    );
}
