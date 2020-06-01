export default class Request {
  baseUrl = 'videosx.com/'
  static get = (route, headers) => {
    fetch(`${baseUrl}${route}`,
      {method: "GET", headers: headers ? headers : {

      }
    }).then().catch()
  };

  static post = (route, headers, body) => {
    fetch(`${baseUrl}${route}`,
      {method: "POST", headers: headers ? headers : {

      }, body: body ? body : {
        
      }
    }).then().catch()
  }
}