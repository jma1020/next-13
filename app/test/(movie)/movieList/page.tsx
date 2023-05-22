"use client";

import { MovieType, MoviesType } from "@/util/MovieTypes";
import Image from "next/image";

const MovieList = ({ page, results }: MoviesType) => {
  return (
    <>
      {results.map((movie: MovieType) => {
        return (
          <div key={movie.id}>
            <h1>{movie.oritinal_title}</h1>
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              width={1200}
              height={1200}
              alt={movie.oritinal_title}
            />
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
