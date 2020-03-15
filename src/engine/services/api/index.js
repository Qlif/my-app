// Core
import axios from 'axios';

class Api {
  constructor() {
    this.http = axios.create({ baseURL: 'http://localhost:3001' });
  }

  static getInstance() {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

//Action getData
  getRequest() {
    return this.http.get('/posts');
  }

//Action Add
  postRequest(title, status) {

    return  this.http.post('/posts', {
            id: '',
            title : title,
            stat : status
          })
          .catch(function (error) {
            console.log(error);
          });
  }

//Actin Delete
  delRequest(delid){

    return this.http.delete('/posts/'+delid, {
           })
          .then(function (response) {

          })
          .catch(function (error) {
            console.log(error);
          })

  }
}

export default Api.getInstance();
