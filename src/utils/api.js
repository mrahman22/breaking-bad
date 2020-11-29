import axios from "axios";

export const fetchAllCharacters = (query) => {
    console.log(query)
  return axios
    .get(`https://www.breakingbadapi.com/api/characters`, {
      params: {
        "name": query
      },
    })
    .then(({ data }) => {
      return data;
    });
};
