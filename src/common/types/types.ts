export type MoviesResponse = {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}

export type Movie = {
    adult: boolean,
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type DatePeriod = {
    dates: {
        maximum: string,
        minimum: string
    }
}

export type MoviesResponseWithDatePeriod = DatePeriod & MoviesResponse

export type MovieDetailsResponse = {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null,
    budget: number,
    genres: { id: number, name: string }[],
    homepage: string,
    id: number,
    imdb_id: "string",
    origin_country: string[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    "production_companies":
        {
            id: number,
            logo_path: null,
            name: string,
            origin_country: string
        }[],

    production_countries:
        {
            iso_3166_1: string,
            name: string
        }[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages:
        {
            english_name: string,
            iso_639_1: string,
            name: string
        }[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    credits: {
        cast: CastType[],
        crew: CrewType[],
    }
    similar: MoviesResponse
}

export type CastType = {
    adult: boolean,
    gender: 1,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: string,
    profile_path: string,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number
}

export type CrewType = {
    adult: boolean,
    gender: 1,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: string,
    profile_path: string,
    credit_id: string,
    department: string,
    job: string
}

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
}

export type GenresResponse = {
    genres: {
        id: number
        name: string
    }[]
}

export const SORT_BY = {
    POPULARITY_ASC: 'popularity.asc',
    RELEASE_DATE_ASC: 'primary_release_date.asc',
    RATING_ASC: 'vote_average_lte.asc',
    TITLE_ASC: 'title.asc',
    POPULARITY_DESC: 'popularity.desc',
    RELEASE_DATE_DESC: 'primary_release_date.desc',
    RATING_DESC: 'vote_average_lte.desc',
    TITLE_DESC: 'title.desc',
} as const

export type Sort_by = (typeof SORT_BY)[keyof typeof SORT_BY]






