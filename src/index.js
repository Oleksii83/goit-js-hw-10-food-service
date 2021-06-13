import '../src/sass/main.scss';
import arrayRecipe from '../src/templates/menu.json';
import markupRecipeTmp from '../src/templates/markup-recipe.hbs';

const menuRecipie = markupRecipeTmp(arrayRecipe);
const insertMenu = document.querySelector('.js-menu');
insertMenu.insertAdjacentHTML('afterbegin', menuRecipie);
const bodyTheme = document.querySelector('body');

//theme sun & moon

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// buttonBox.onclick = function () {
//   bodyTheme.classList.toggle('light-theme');
//   localStorage.setItem('Theme', Theme.LIGHT);

//   bodyTheme.classList.toggle('dark-theme');
//   localStorage.setItem('Theme', Theme.DARK);
// };

function onCheckbox(evt) {
  if (evt.target.checked) {
    bodyTheme.classList.add(Theme.DARK);
    bodyTheme.classList.remove(Theme.LIGHT);

    localStorage.setItem('Theme', Theme.DARK);
  } else if (!evt.target.checked) {
    bodyTheme.classList.add(Theme.LIGHT);
    bodyTheme.classList.remove(Theme.DARK);

    localStorage.setItem('Theme', Theme.LIGHT);
  }
}

const menuItem = markupRecipeTmp(arrayRecipe);
const menuRender = document.querySelector('.js-menu');
const buttonBox = document.querySelector('#theme-switch-toggle');

savedThemeLoad();

menuRender.insertAdjacentHTML('afterbegin', menuItem);
buttonBox.addEventListener('change', onCheckbox);

function savedThemeLoad() {
  const savedTheme = localStorage.getItem('Theme');
  if (savedTheme) {
    bodyTheme.classList.add(savedTheme);
    if (savedTheme === 'dark-theme') {
      buttonBox.checked = true;
    }
  }
}
