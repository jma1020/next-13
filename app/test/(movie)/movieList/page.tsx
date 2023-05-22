"use client";
import Image from "next/image";
import { MovieType, MoviesType } from "@/util/MovieTypes";

const MovieList = ({ page, results }: MoviesType) => {
  return (
    <>
      {results.map((movie: MovieType) => {
        return (
          <div key={movie.id}>
            <h1>{movie.original_title}</h1>
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              width={1200}
              height={1200}
              alt={movie.original_title}
            />
          </div>
        );
      })}
    </>
  );
};

export default MovieList;

// 이 페이지는 컴포넌트로 빼는 것이 맞다.
