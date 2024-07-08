import axios from "axios";

export default async function searchTrendingMovie() {
  const url = "https://api.themoviedb.org/3/trending/movie/day";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmQxYWMzNGNiMGZiNjUyZDI3MGQ1NzA0YmZmOWRlNSIsIm5iZiI6MTcxOTIzNjI4OS40Njc1NTksInN1YiI6IjY2Nzk3NWI2OTliYjFhNGNhY2EwOTMyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.prTRCqc4cEeU291B_WMXuQlbceOPxq-pUFSyvqjCPuk",
    },
  };

  const data = await axios.get(url, options);
  return data;
}