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

  getRequest() {
    return this.http.get('/posts');
  }

//Action Add
  postRequest(title, status) {
      this.http.post('/posts', {
      id: '',
      title : title,
      stat : status
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

//Actin Delete

  delRequest(delid){

    this.http.delete('/posts/'+delid, {
    })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }

}

export default Api.getInstance();