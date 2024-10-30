import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = process.env.API_URL_ENV;

async function getMovies() {
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </>
  );
}
