document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('comment-form');
  const usernameInput = document.getElementById('username-input');
  const commentInput = document.getElementById('comment-input');
  const commentsList = document.getElementById('comments-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const commentText = commentInput.value.trim();
    if (username === '' || commentText === '') return;

    // Create timestamp
    const now = new Date();
    const timestamp = now.toLocaleString();

    // Create new list item for the comment
    const li = document.createElement('li');
    li.innerHTML = `<strong>${username}</strong>: ${commentText}`;
    li.innerHTML += `<br><small>${timestamp}</small>`;

    commentsList.appendChild(li);

    // Clear the form
    usernameInput.value = '';
    commentInput.value = '';
  });
});
