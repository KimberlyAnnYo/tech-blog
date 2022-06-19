const CreatePostHandler = async function(event) {
    event.preventDefault();
  
    const postTitle = document.querySelector('#title');
    const postContent = document.querySelector('#post');
  
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        postTitle: postTitle.value,
        postContent:postContent.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to post');
    }
  };
  
  document
    .querySelector('.create-post-form')
    .addEventListener('submit', CreatePostHandler);