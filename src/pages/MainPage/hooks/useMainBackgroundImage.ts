import { useMemo } from "react";
import { getRandomNumber } from "@/common/utils";
import { useGetPopularMovieQuery } from "@/app/model";
import { IMAGE_SIZES } from "@/common/constants";
import noCover from "@/assets/images/noCover.svg";
import { useImageBasePath } from "@/common/hooks/useImageBasePath.ts";

export const useMainBackgroundImage = () => {
  const page = useMemo(() => {
    const number = getRandomNumber(100)
    return number ? number : 1;
  }, [])

  const {data: popularMovies} = useGetPopularMovieQuery({page})
  const imageBasePath = useImageBasePath(IMAGE_SIZES.ORIGINAL)

  const randomIndex = useMemo(() => getRandomNumber(popularMovies ? popularMovies.results.length : 0), [popularMovies])
  let mainImageUrl;
  if (popularMovies && popularMovies.results.length > 0 && imageBasePath) {
    mainImageUrl = imageBasePath + popularMovies.results[randomIndex].backdrop_path
  } else mainImageUrl = noCover

  return {backgroundImage: `linear-gradient(rgba(4, 21, 45, 0) 0%, rgb(18, 18, 18) 79.17%), url(${mainImageUrl})`}
}