let ui = {
  renderPosts(posts){
    let elements = posts.map( (post) =>{
      let {title, lastReply} = post;
      // same as post.title and post.lastReply
      return articleTemplate(title,lastReply);
    });
    let target = document.querySelector(".container");
    target.innerHTML = elements.join("");
  }
}


function articleTemplate (title, lastReply){

let template = `<article class='post'>
    <h2 class='post-title'>
    ${title}
    </h2>
    <p class='post-meta'>
      last reply on, ${lastReply}
    </p>
  </article>`
  return template;
}
export default ui;
