export const selectMovies = state => state.movies.movies;
export const selectPage = state => state.movies.page;
export const selectTotalPages = state => state.movies.totalPages;
export const selectIsLoading = state => state.movies.isLoading;
export const selectError = state => state.movies.error;

export const selectSearchQuery = state => state.searchMovies.query;
export const selectSearchMovies = state => state.searchMovies.movies;
export const selectSearchIsLoading = state => state.searchMovies.isLoading;
export const selectSearchMoviePage = state => state.searchMovies.page;
export const selectSearchTotalPages = state => state.searchMovies.totalPages;

export const selectTheme = state => state.theme.theme;