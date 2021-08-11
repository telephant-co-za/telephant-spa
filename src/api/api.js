export const getContacts = () => {

    return fetch(
      `http://www.telephant.co.za/contacts.json`
    )
      .then(res => res.json())
      .then(json => json);
  };
  
  /* export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };
  
  export const getMovieImages = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => json.posters);
  }; */