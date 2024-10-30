import React, { Suspense } from "react";
import MovieVideos from "../../../../components/movie-videos";
import MovieInfo from "../../../../components/movie-info";

export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movies info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h1>Loading movies videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
