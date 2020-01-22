const fetchArticles = (query, pageNum) => {
  return fetch(
    `https://api.unsplash.com/search/photos?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0&page=${pageNum}&query=${query}`,
  )
    .then(res => res.json())
    .then(data => data.results);
};

export default { fetchArticles };
