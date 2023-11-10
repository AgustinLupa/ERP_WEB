const api = 'http://api-erp.somee.com/api';
export async function GET(url, request = null) {
  let uri = "";
  if (request) {
    uri = '?' + new URLSearchParams(request).toString();
  }
  return await fetch(api + url + uri, {
    method: 'GET',
    mode: 'cors'
    /* headers: {
         'Authorization': `Bearer ${localStorage.getItem('token')}` || ''
     }*/
  }).then(res => res.json()).then(res => res).catch(err => err);
}