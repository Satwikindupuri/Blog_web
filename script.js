document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');
  const commentsList = document.getElementById('comments-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing page

    const commentText = commentInput.value.trim();
    if (commentText === '') return;

    // Create new list item for the comment
    const li = document.createElement('li');
    li.textContent = commentText;

    // Add comment to the list
    commentsList.appendChild(li);

    // Clear the textarea
    commentInput.value = '';
  });
});
