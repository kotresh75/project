const message = document.getElementById('message');
const button = document.getElementById('action-button');

button.addEventListener('click', () => {
  const newText = message.textContent.includes('simple')
    ? 'The message changed successfully!'
    : 'This is a simple starter page.';

  message.textContent = newText;
});
