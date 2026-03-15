import * as z from 'zod';

export const MovieSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number().int()),
  id: z.number().int(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  release_date: z.string(),
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
});

export const MoviesResponseWithDatePeriodSchema = MoviesResponseSchema.extend({
  dates: z.object({
    maximum: z.string(),
    minimum: z.string(),
  }),
});

export const CrewSchema = z.object({
  adult: z.boolean(),
  gender: z.number().int(),
  id: z.number().int(),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number(),
  profile_path: z.string().nullable(),
  credit_id: z.string(),
  department: z.string(),
  job: z.string(),
});

export const CastSchema = z.object({
  adult: z.boolean(),
  gender: z.number().int(),
  id: z.number().int(),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number(),
  profile_path: z.string().nullable(),
  cast_id: z.number().int(),
  character: z.string(),
  credit_id: z.string(),
  order: z.number().int(),
});

const SpokenLanguageSchema = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string(),
});

const ProductionCompaniesSchema = z.object({
  id: z.number().int(),
  logo_path: z.string().nullable(),
  name: z.string(),
  origin_country: z.string(),
});

const ProductionCountriesSchema = z.object({
  name: z.string(),
  iso_3166_1: z.string(),
});

export const GenreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const GenresResponseSchema = z.object({
  genres: z.array(GenreSchema),
});

export const MovieDetailsResponseSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  belongs_to_collection: z
    .object({
      backdrop_path: z.string().nullable(),
      id: z.number(),
      name: z.string(),
      poster_path: z.string().nullable(),
    })
    .nullable(),
  budget: z.number().int().nonnegative(),
  genres: z.array(GenreSchema),
  homepage: z.string(),
  id: z.number().int(),
  imdb_id: z.string(),
  origin_country: z.array(z.string()).optional(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  production_companies: z.array(ProductionCompaniesSchema),
  production_countries: z.array(ProductionCountriesSchema),
  release_date: z.string(),
  revenue: z.number(),
  runtime: z.number(),
  spoken_languages: z.array(SpokenLanguageSchema),
  status: z.string(),
  tagline: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
  credits: z.object({
    id: z.number().int().optional(),
    cast: z.array(CastSchema),
    crew: z.array(CrewSchema),
  }),
  similar: MoviesResponseSchema,
});

export const ConfigurationSchema = z.object({
  change_keys: z.array(z.string()),
  images: z.object({
    base_url: z.string(),
    secure_base_url: z.string(),
    backdrop_sizes: z.array(z.string()),
    logo_sizes: z.array(z.string()),
    poster_sizes: z.array(z.string()),
    profile_sizes: z.array(z.string()),
    still_sizes: z.array(z.string()),
  }),
});
