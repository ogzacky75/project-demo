document.addEventListener('DOMContentLoaded', post);

const addPostBtn = document.querySelector('#post-btn')


function displayPosts(){
	
	fetch('http://localhost:3000/posts',{
		method: 'POST',
		headers: {
			'Content-Type':'application/json'
		},
		body: JSON.stringify({
			title: 'First Post',
			content: 'baby ghosts',
			author: 'brian'
			

		})

	})
      .then(res=> res.json())
	  .then(db=> db.json())

	  
      

}
function getPost(){
	
	fetch('http://localhost:3000/posts',{
		method: 'GET',
		headers: {
			'Content-Type':'application/json'
		},
		body: JSON.stringify({
			title: 'First Post',
			content: 'baby ghosts',
			author: 'brian'
			

		})

	})
      .then(res=> res.json())
	  .then(db=> db.json())

	  
      

}

function getPosts(){
	
	fetch('http://localhost:3000/posts/1',{
		method: 'GET',
		headers: {
			'Content-Type':'application/json'
		},
		body: JSON.stringify({
			title: 'First Post',
			content: 'baby ghosts',
			author: 'brian'
			

		})

	})
      .then(res=> res.json())
	  .then(db=> db.json())

	  
      

}

function updatePosts(){
	
	fetch('http://localhost:3000/posts',{
		method: 'PATCH',
		headers: {
			'Content-Type':'application/json'
		},
		body: JSON.stringify({
			title: 'First Post',
			content: 'baby ghosts',
			author: 'brian'
			

		})

	})
      .then(res=> res.json())
	  .then(db=> db.json())

	  
      

}

function deleteposts(id) {
  if (confirm("Are you sure you want to delete this?")) {
    post = post.filter(posts => posts.id !== id);
    renderBooks();
  }
}