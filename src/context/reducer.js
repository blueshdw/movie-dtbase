export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_PLAYLIST":
      return {
        ...state,
        playlist: [...state.playlist, action.payload],
      };
    case "REMOVE_MOVIE_TO_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.filter((movie) => movie.id !== action.payload),
      };
    case "ADD_MOVIE_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_MOVIE_TO_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
