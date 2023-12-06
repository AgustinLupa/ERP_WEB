import axios from "axios";

const instance = axios.create({
    baseURL: 'http://erp-api.somee.com/api'
  });


  const posting = async (params) => {
  
    return await instance.post("users/login", JSON.stringify(params), 
      { 
        method: "post",
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}` || '', 
        'Content-Type': 'application/json'
        }
      })
//pasar esto al post para api y mostrar el status 400 o 500 en el login en alguna parte
  .then((response) => response)
} 


export {posting}

//Hacer un get, post , delete, put para cada caso todo dentro de acá 