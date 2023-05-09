export default function Loading() {

    return (
        <div className="animate-pulse w-full">
            {/* Title */}
            <div className=" w-72 mx-auto mb-3 h-10 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full" />

            <div className=" xl:grid grid-cols-2 gap-10 items-center my-auto xl:mt-24">
                {/* Image */}
                <div className="mt-12 w-full rounded-3xl select-none col-start-1 h-80 xl:mt-0 bg-gradient-to-r from-slate-400 to-slate-500" />

                <div>
                    {/* Info */}
                    <div className=" h-40 sm:h-32 relative grid grid-cols-3 sm:flex items-start justify-evenly sm:-top-14 xl:top-0 my-10 sm:my-2 backdrop-blur-md bg-gradient-to-r from-slate-400/80 to-slate-500/80 pt-3 w-full sm:w-4/5 mx-auto rounded-2xl">
                    </div>

                    {/* Description */}
                    <div className="mx-24 h-40 rounded-xl px-5 lg:px-14 xl:p-10 bg-gradient-to-r from-slate-400 to-slate-500"></div>
                </div>

            </div>

            {/* More Info */}
            <div className="bg-gradient-to-r from-slate-400 to-slate-500 py-8 mt-20 h-80 rounded-3xl xl:mx-20" />
        </div>
    );
}