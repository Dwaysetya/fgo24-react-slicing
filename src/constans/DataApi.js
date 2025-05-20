// import { useEffect, useState } from "react";

// const API_KEY =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjFhZmNlMThmOTVlNDNhODYzNzcwZjRmNzU3N2NlYSIsIm5iZiI6MTc0NzQyMTY2My45ODIsInN1YiI6IjY4Mjc4OWRmYmY0NWFiNTM1MjNkZDM2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B3xquaTWkKxdQBeHsdUUfT-uv9FaZrYjKzkm19U_v6E";

// const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjFhZmNlMThmOTVlNDNhODYzNzcwZjRmNzU3N2NlYSIsIm5iZiI6MTc0NzQyMTY2My45ODIsInN1YiI6IjY4Mjc4OWRmYmY0NWFiNTM1MjNkZDM2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B3xquaTWkKxdQBeHsdUUfT-uv9FaZrYjKzkm19U_v6E",
//   },
// };

// function FilmList() {
//   const [isData, setIsData] = useState([]);
//   console.log("ddd", isData);

//   useEffect(() => {
//     fetch(url, options)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("aaaa", data.results);
//         setIsData(data.results);
//       })
//       .catch((err) => console.error(err));
//   }, []);
// }
