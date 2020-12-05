import axios from "axios";

export const fetchAllCharacters = (query) => {
  return axios
    .get(`https://www.breakingbadapi.com/api/characters?limit=20`, {
      params: {
        "name": query
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export const fetchSingleCharacter = (id) => {
  return axios
  .get(`https://www.breakingbadapi.com/api/characters/${id}`)
  .then(({data}) => {
    return data[0];
  });
}

