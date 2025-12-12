import {baseApi} from "@/app/baseApi.ts"
import type {MovieDetailsResponse} from "@/common/types/types.ts";

export const movieDetailApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMovieDetail: builder.query<MovieDetailsResponse, number >({
            query: (movieId) => ({
                url: `/movie/${movieId}`,
                params:{
                    append_to_response: 'credits,similar',
                },
            }),
        }),

    })
})

export const {useGetMovieDetailQuery} = movieDetailApi

