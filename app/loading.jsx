export default function Loading() {
    return (
        <div className=" animate-pulse">
            <div className=" h-10 rounded-full w-72 mx-auto bg-gradient-to-r from-slate-400 to-slate-500 mb-16" />

            <div className="grid gap-16 grid-cols-2 md:grid-cols-3 w-full">
                <div className=" w-48 h-48 bg-gradient-to-r from-slate-400 to-slate-500 rounded-3xl" />
                <div className=" w-48 h-48 bg-gradient-to-r from-slate-400 to-slate-500 rounded-3xl" />
                <div className=" w-48 h-48 bg-gradient-to-r from-slate-400 to-slate-500 rounded-3xl" />
            </div>
        </div>
    );
}
