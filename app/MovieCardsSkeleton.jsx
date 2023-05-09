export default function MovieCardsSkeleton() {

    const numberOfCards = 20;

    return (
        <div className="animate-pulse w-full">
            {/* Title */}
            <div className=" h-10 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full mb-16 w-72 mx-auto"></div>

            {/* 20 Movie Cards */}
            <div className="grid gap-16 grid-cols-fluid my-16 w-full max-w-3xl mx-auto">
                {[...Array(numberOfCards)].map((i) =>
                    <div key={i}>
                        <div className="bg-gradient-to-r from-slate-400 to-slate-500 rounded-3xl w-full h-192 sm:h-96 md:h-150" />
                        <div className=" h-6 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full w-7/12 mx-auto m-4" />
                        <div className=" h-4 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full w-3/12 mx-auto" />
                    </div>
                )}
            </div>

        </div>
    );
}
