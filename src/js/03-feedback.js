import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form'); 
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const savedFormState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
if (savedFormState) {
  emailInput.value = savedFormState.email || '';
  messageInput.value = savedFormState.message || '';
}

form.addEventListener('input', throttle(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
    email: emailInput.value,
    message: messageInput.value
  }));
}, 500));

form.addEventListener('submit', event => {
  event.preventDefault(); 
  console.log({
    email: emailInput.value,
    message: messageInput.value 
  });

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
});
