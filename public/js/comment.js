

const commentFormHandler = async (event) => {
  event.preventDefault();
  const postId = document.querySelector('#postId').value;
  const commentContent = document.querySelector('#body').value;
  console.log(commentContent);

  if(commentContent) {
    const response = await fetch(`/api/comments/`, {
      method: 'POST',
      body: JSON.stringify({
        postId,
        commentContent
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  };
}

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);