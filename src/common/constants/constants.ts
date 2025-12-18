export const PATH = {
    MAIN_PAGE: '/',
    CATEGORY_MOVIES_PAGE: '/category',
    FILTERED_MOVIES_PAGE: '/filter',
    FAVORITES_MOVIES_PAGE: '/favorites',
    SEARCH_PAGE: '/search',
    NOT_FOUND: '*',

    POPULAR_MOVIES: 'popular',
    TOP_RATED_MOVIES: 'top-rated',
    UPCOMING_MOVIES: 'upcoming',
    NOW_PLAYING_MOVIES: 'now-playing',
} as const;

export const SECTION_LABELS = {
    MAIN_PAGE: 'Main',
    CATEGORY_MOVIES_PAGE: 'Category movies',
    FILTERED_MOVIES_PAGE: 'Filtered movies',
    FAVORITES_MOVIES_PAGE: 'Favorites',
    SEARCH_PAGE: 'Search',
    POPULAR_MOVIES: 'Popular ',
    TOP_RATED_MOVIES: 'Top Rated ',
    UPCOMING_MOVIES: 'Upcoming ',
    NOW_PLAYING_MOVIES: 'Now Playing ',
} as const

export const IMAGE_PATH = 'https://image.tmdb.org/t/p/'

export const POSTER_SIZES = {
    // "w92",
    // "w154",
    CARD: "w185",
    // "w342",
    BIG: "w500",
    // "w780",
    ORIGINAL: "original"
}

export const PROFILE_SIZES = {
    SMALL: 'w45',
    CARD: "w185",
    BIG: "h632",
    ORIGINAL: "original"
}

export const SORT_BY = {
    POPULARITY_ASC: 'popularity.asc',
    RELEASE_DATE_ASC: 'primary_release_date.asc',
    RATING_ASC: 'vote_average.asc',
    TITLE_ASC: 'title.asc',
    POPULARITY_DESC: 'popularity.desc',
    RELEASE_DATE_DESC: 'primary_release_date.desc',
    RATING_DESC: 'vote_average.desc',
    TITLE_DESC: 'title.desc',
} as const


