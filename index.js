const postForm = document.getElementById('postForm')
const postsContainer = document.getElementById('postsContainer')
const  API_URL = "http://localhost:3000/posts"


//to feach and display post
function displayPosts(){
   fetch("http://localhost:3000/posts")
   .then(res => res.json())
   .then(posts =>{
    const postList = document.getElementById('post-list')
    postList.innerHTML =''

    //setting post ID for click handling
 posts.forEach(post => {
        const postItem = document.createElement("div");
        postItem.classList.add("post-item");

        postItem.dataset.id = post.id

        postItem.innerHTML = `
          <h3>${post.title}</h3>
          ${post.image ? `<img src="${post.image}" alt="${post.title}" style="max-width: 300px;">` : ''}
        `;

        //create delete button
       const deleteBtn = document.createElement('button')
      deleteBtn.textContent = "Delete"
      deleteBtn.classList.add("delete-btn")
       //adding functionality to delete button
      deleteBtn.addEventListener('click',() => {
     fetch(`http://localhost:3000/posts/${post.id}`,{
        method: "DELETE"
      } 
      )
      .then(res =>{
        if(res.ok){
         displayPosts()
        }else {
      console.error("Failed to delete post");
    }
    } )
   })
 
      postItem.appendChild(deleteBtn);
        postList.appendChild(postItem);
      });
    })
  

  }
//render a single post
//function renderPost(post){
  //  condt postList = document.getElementById('post-list')
  //  const div = document.createElement('div')
  //  div.classList.add('post')
       
  //  div.innerHTML = `
    //  <h3> ${post.title} </h3>
    //  <p>${post.content} </p>`
     
  // postList.appendChild(div)   


//fetch and display post detaild
function handlePostClick(event) {
  const postElement = event.target.closest(".post-item");
  if (!postElement) return;

  const postId = postElement.dataset.id;

  fetch(`http://localhost:3000/posts/${postId}`)
    .then(res => res.json())
    .then(post => {
      const detailDiv = document.getElementById('post-detail');
      detailDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        
        ${post.image ? `<img src="${post.image}" alt="${post.title}" style="max-width: 300px;">` : ''}
      `;
    });
}
//attach click listener to post list
document.getElementById('post-list').addEventListener('click', handlePostClick)

//add new post
//add new postListener
function addNewPostListener() {
  const form = document.getElementById('new-post-form');

 form.addEventListener('submit', function (e) {
    e.preventDefault(); //stops the page from reloading

    const title = document.getElementById('new-title').value
    const content = document.getElementById('new-content').value
    const image = document.getElementById('new-image').value

    const post = {
        title,
        content,
        image,  
    }
    
    //append
    const postList = document.getElementById('post-list')
    const postDiv = document.createElement('div');
    //postDiv.textContent = post.title;
    postDiv.classList.add('post-item')
 
   postDiv.innerHTML = `
      <h3>${post.title}</h3>
      ${post.image ? `<img src="${post.image}" alt="${post.title}" style="max-width: 300px;">` : ''}
    `;

postList.appendChild(postDiv);
 
form.reset ();
})
}
//Main function for starting app
function main (){
    displayPosts();
    addNewPostListener();
    document.getElementById('post-list').addEventListener('click', handlePostClick)
}
//page load
document.addEventListener('DOMContentLoaded',main)