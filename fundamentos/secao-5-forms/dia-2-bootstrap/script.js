const btnSubmit = document.querySelector('#submit-btn');
const clearBtn = document.querySelector('#clear-btn');
const getCheckbox = document.querySelector('#agreement');

const defaultEvent = (event) => {
  event.preventDefault();
};

const clearFields = () => {
  btnSubmit.disabled = true;
};

const verifyCheckbox = () => {
  if (getCheckbox.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
};

window.onload = function () {
  btnSubmit.addEventListener('click', defaultEvent);
  clearBtn.addEventListener('click', clearFields);
  getCheckbox.addEventListener('change', verifyCheckbox);
};
