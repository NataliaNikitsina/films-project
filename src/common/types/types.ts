import * as z from "zod";
import {
    CastSchema, GenreSchema, GenresResponseSchema,
    MovieDetailsResponseSchema, MovieSchema,
    MoviesResponseSchema, MoviesResponseWithDatePeriodSchema
} from "@/common/types/schemas.ts";
import {SORT_BY} from "@/common/constants/constants.ts";


export type Movie = z.infer<typeof MovieSchema>;
export type MoviesResponse = z.infer<typeof MoviesResponseSchema>;
export type Cast = z.infer<typeof CastSchema>;
export type Genre = z.infer<typeof GenreSchema>;
export type MoviesResponseWithDatePeriod = z.infer<typeof MoviesResponseWithDatePeriodSchema>;
export type MovieDetailsResponse = z.infer<typeof MovieDetailsResponseSchema>;
export type GenresResponse = z.infer<typeof GenresResponseSchema>;

export type SearchParams = {
    query: string
    include_adult?: boolean
    language?: string
    primary_release_year?: string
    page?: number
    region?: string
    year?: string
}

export type  QueryParams = {
    sort_by?: Sort_by
    'vote_average.lte'?: number
    'vote_average.gte'?: number
    with_genres?: string,
    page?: number
}

export type Filter= {
    sort?: Sort_by,
    rating?: [number, number],
    genres?: string,
}

export type Sort_by = (typeof SORT_BY)[keyof typeof SORT_BY]







