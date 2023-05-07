import ProductionCompanies from "./ProductionCompanies";
import { FaImdb, FaTheaterMasks, FaLink } from "react-icons/fa";

export default function MoreInfo({ data }) {
    const imdbPath = "https://www.imdb.com/title/";

    return (
        <div className=" bg-slate-400/40 dark:bg-slate-200/40 backdrop-blur-md py-8 mt-20 rounded-3xl xl:mx-20">
            {/* Title */}
            <h3 className=" text-2xl font-medium mb-5">More Info</h3>

            {/* Genres */}
            <div className="flex justify-center gap-5 items-center m-4">
                <FaTheaterMasks className="text-2xl" />
                <div className="flex justify-center gap-3">
                    {data.genres.map((genre) => (
                        <span key={genre.id}>{genre.name}</span>
                    ))}
                </div>
            </div>

            {/* Homepage */}
            {data.homepage && (
                <a href={data.homepage} target="_blank" className="flex justify-center gap-5 items-center m-4">
                    <FaLink />
                    Homepage
                </a>
            )}

            {/* IMDB */}
            {data.imdb_id && (
                <a href={imdbPath + data.imdb_id} target="_blank" className="flex justify-center items-center gap-3 m-4">
                    <FaImdb className="text-2xl" />
                    <h3>View on IMDB</h3>
                </a>
            )}

            {/* Production Companies */}
            <div className="flex justify-center items-start gap-6 m-3 max-w-md xl:max-w-2xl overflow-scroll mx-auto rounded-md py-5">
                {data.production_companies.map((company) => (
                    <ProductionCompanies key={company.id} name={company.name} logo={company.logo_path} />
                ))}
            </div>

        </div>
    );
}
