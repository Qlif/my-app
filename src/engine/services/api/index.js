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

//Action EditButton
  putRequest(id, title, status){
        return this.http.put('/posts/'+id, {
            title : title,
            stat : status
           })
           .then(function (response) {

           })
           .catch(function (error) {
             console.log(error);
           })
  }
  //Get Todoitems Done
    getDone(){
      return this.http.get('/posts?stat=true');
    }

    //Get Todoitems NotDone

    getNotDone(){
        return this.http.get('/posts?stat=false');
    }
}

export default Api.getInstance();
