import axios from "axios"




export const fetchAllCharacters = () => {
     return axios.get('https://www.breakingbadapi.com/api/characters').then(({data}) => {
         return data;
     })
}