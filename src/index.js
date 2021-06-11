import '../src/sass/main.scss';
import arrayRecipe from '../src/templates/menu.json';

import markupRecipeTmp from '../src/templates/markup-recipe.hbs';

const menuRecipie = markupRecipeTmp(arrayRecipe);
const insertMenu = document.querySelector('.js-menu');
insertMenu.insertAdjacentHTML('afterbegin', menuRecipie);

//theme sun & moon

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyTheme = document.querySelector('body');
let buttonBox = document.querySelector('.theme-switch__toggle');
buttonBox.onclick = function () {
  bodyTheme.classList.toggle('light-theme');
  bodyTheme.classList.toggle('dark-theme');
  //   bodyTheme.classList.remove('light-theme');
  //   bodyTheme.classList.add('dark-theme');
};
