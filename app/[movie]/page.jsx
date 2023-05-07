import Image from "next/image";
import Info from "./Info";
import MoreInfo from "./MoreInfo";

export default async function MovieDetail({ params }) {
    const { movie } = params;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_API_KEY}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    // Path
    const imagePath = "https://image.tmdb.org/t/p/original";

    return (
        <div className="sm:mx-20 md:mx-32 lg:mx-56 xl:mx-28">
            {/* Title */}
            <h2 className="text-5xl mx-10 mb-3">{data.title}</h2>

            <div className=" xl:grid grid-cols-2 gap-10 items-center my-auto xl:mt-24">
                {/* Image */}
                <Image src={imagePath + data.backdrop_path} className="mt-12 w-full rounded-3xl select-none col-start-1 xl:mt-0" width={1000} height={500} alt={data.title} priority draggable="false" />

                <div>
                    {/* Info */}
                    <Info data={data} />

                    {/* Description */}
                    {data.overview && (
                        <p className="text-lg px-5 lg:px-14 xl:p-10">{data.overview}</p>
                    )}
                </div>

            </div>

            {/* More Info */}
            <MoreInfo data={data} />
        </div>
    );
}
