import axios from "axios";

const instance = axios.create({
    baseURL: 'http://erp-api.somee.com/api'
  });
  //jwt será el nombre del elemento que hay que guardar en el local storage



export {instance}

//Hacer un get, post , delete, put para cada caso