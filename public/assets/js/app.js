console.clear();

const bodyDOM = document.querySelector('body')
const bodyElementsDOM = bodyDOM.querySelectorAll('*');
const logoDOM = document.querySelector('.logo'); // pick an element in your DOM

const showBOXModel = () => {
  bodyElementsDOM.forEach(el => {
    el.classList.toggle('border');
  });
}

logoDOM.addEventListener('click', showBOXModel); // or 'dblclick' if preferred
