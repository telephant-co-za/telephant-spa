export const getContacts = () => {

    return fetch(
      `http://www.telephant.co.za/contacts.json`
    )
      .then(res => res.json())
      .then(json => json);
  };
  
export const getBalance = () => {
    return fetch(
      `http://www.telephant.co.za/balance.json`
    ).then(res => res.json());
  };
  
  export const getTransactions = () => {
    return fetch(
      `http://www.telephant.co.za/transactions.json`
    ).then(res => res.json());
  };
  
 /* export const getMovieImages = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => json.posters);
  }; */