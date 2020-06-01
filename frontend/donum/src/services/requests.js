export default class Request {
  baseUrl = 'https://donum-backend.herokuapp.com/'
  static get = (route, headers) => fetch(`${baseUrl}${route}`, { method: "GET", headers: headers ? headers : {} });

  static post = (route, body, headers) => fetch(`${baseUrl}${route}`, { method: "POST", body, headers: headers ? headers : {} });

  static put = (route, body, headers) => fetch(`${baseUrl}${route}`, { method: "PUT", body, headers: headers ? headers : {} });

  static delete = (route, body, headers) => fetch(`${baseUrl}${route}`, { method: "DELETE", body, headers: headers ? headers : {} });
}