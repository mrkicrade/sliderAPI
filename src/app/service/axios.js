import axios from 'axios';

// ovde se pravi instanca axios-a i exportuje se. U index.js glavnom treba da imporujemo tu instancu da njome uhvatim api i da ga pozovem i kada mi sitgnu podaci sa api-ja da ih smestim u this.data

export const httpService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {'Accept': 'application/json'}
})
