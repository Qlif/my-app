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
  postRequest() {
      this.http.post('/posts', {
      id: '',
      title : "Teeaegye",
      stat : "true"
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


  // TODO: add your own api methods here
}

export default Api.getInstance();
