
const editFormHandler = async (event) => {
  event.preventDefault();
  const postId = document.querySelector('#postId').value;
  const postTitle = document.querySelector('#title').value;
  const postContent = document.querySelector('#post').value;

  console.log(postTitle);
  console.log(postContent);

  const response = await fetch(`/api/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      postTitle,
      postContent,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  console.log(response);
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to update your post');
  }
  document.location.replace('/dashboard');
};

const deleteClickHandler = async () => {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit')
  .addEventListener('click', editFormHandler);
document
  .querySelector('#delete')
  .addEventListener('click', deleteClickHandler);