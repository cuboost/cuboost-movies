import Movie from "../Movie";

async function getData() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_API_KEY}`, { next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Popular() {
  const data = await getData();

  return (
    <main>
      <h1 className=" text-5xl font-medium mb-5">Popular Movies</h1>

      <div className="grid gap-16 grid-cols-fluid my-16">
        {data.results.map((movie) => (
          <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} />
        ))}
      </div>
    </main>
  );
}
