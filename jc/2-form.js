const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const formData = {
  email: '',
  message: '',
};

const saveData = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const populateForm = () => {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    formData.email = parsed.email ?? '';
    formData.message = parsed.message ?? '';
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  } catch (error) {
    console.error('Failed to parse form data', error);
  }
};

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name === 'email') {
    formData.email = value.trim();
  }

  if (name === 'message') {
    formData.message = value.trim();
  }

  saveData();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
});

populateForm();
