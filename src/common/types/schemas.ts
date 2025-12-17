import * as z from "zod";

export const MovieSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string(),
    genre_ids: z.array(z.number().int()),
    id: z.number().int(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string(),
    release_date: z.iso.date(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number().nonnegative(),
    vote_count: z.number(),
});

export const MoviesResponseSchema = z.object({
    page: z.number().int(),
    results: z.array(MovieSchema),
    total_pages: z.number().int(),
    total_results: z.number().int(),
})

export const DatePeriodSchema = z.object({
    dates: z.object({
        maximum: z.string(),
        minimum: z.string()
    })
})

export const MoviesResponseWithDatePeriodSchema = MoviesResponseSchema.and(DatePeriodSchema)

export const CrewSchema = z.object({
    adult: z.boolean(),
    gender: 1,
    id: z.number().int(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.string(),
    profile_path: z.string(),
    credit_id: z.string(),
    department: z.string(),
    job: z.string(),
})

export const CastSchema = z.object({
    adult: z.boolean(),
    gender: 1,
    id: z.number().int(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.string(),
    profile_path: z.string(),
    cast_id: z.number().int(),
    character:  z.string(),
    credit_id:  z.string(),
    order: z.number().int(),
})

const SpokenLanguageSchema = z.object({
    english_name: z.string(),
    iso_639_1: z.string(),
    name: z.string(),
})

const ProdactionCompaniesSchema = z.object({
    id: z.number().int(),
    logo_path: null,
    name: z.string(),
    origin_country: z.string(),
})

const ProdactionCountriesSchema = z.object({
    name: z.string(),
    iso_3166_1: z.string(),
})

const GenreSchema = z.object({
    id: z.number(),
    name: z.string(),
})

export const GenresResponseSchema = z.object({
    genres: z.array(GenreSchema),
})

export const MovieDetailsResponseSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.url(),
    belongs_to_collection: null,
    budget: z.number(),
    genres: z.array(GenreSchema),
    homepage: z.string(),
    id: z.number().int(),
    imdb_id: "string",
    origin_country: z.array(z.string()),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string(),
    production_companies:z.array(ProdactionCompaniesSchema),
    production_countries:z.array(ProdactionCountriesSchema),
    release_date: z.iso.date(),
    revenue: z.number(),
    runtime: z.number(),
    spoken_languages:z.array(SpokenLanguageSchema),
    status: z.string(),
    tagline: z.string(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
    credits: z.object({
        cast: z.array(CastSchema),
        crew: z.array(CrewSchema),
    }),
    similar: MoviesResponseSchema
})

