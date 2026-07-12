const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

const throttle = (callback, delay = 500) => {
  let timeoutId = null;

  return (...args) => {
    if (timeoutId !== null) {
      return;
    }

    timeoutId = setTimeout(() => {
      callback(...args);
      timeoutId = null;
    }, delay);
  };
};

const saveData = throttle(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);

const populateForm = () => {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    formData.email = parsed.email ?? '';
    formData.message = parsed.message ?? '';

    if (form.email) {
      form.email.value = formData.email;
    }

    if (form.message) {
      form.message.value = formData.message;
    }
  } catch (error) {
    console.error('Failed to parse form data', error);
  }
};

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (!Object.prototype.hasOwnProperty.call(formData, name)) {
    return;
  }

  formData[name] = value.trim();
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
