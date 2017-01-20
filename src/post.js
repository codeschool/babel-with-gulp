let Post = {
  findAll(){
    return new Promise((resolve,reject) =>{
      let uri = "http://localhost:3000/posts"
      let request = new XMLHttpRequest();
      request.open("GET", uri, true);
        request.onload = () => {
          if(request.status >= 200 && request.status < 400){
            resolve(JSON.parse(request.response));
          }
        },
        request.onerror = () => {
            reject(new Error('Something went wrong! - probably those darn APIs again'));
        }
        request.send();
    });
  }
}

export default Post;
