console.log(
  '🚀 ~ file: index.js ~ line 1 ~ markupRecipeTmp(arrayRecipe)',
  markupRecipeTmp(arrayRecipe),
);
import '../src/sass/main.scss';
import arrayRecipe from '../src/templates/menu.json';

import markupRecipeTmp from '../src/templates/markup-recipe.hbs';

const menuRecipie = markupRecipeTmp(arrayRecipe);
const insertMenu = document.querySelector('.js-menu');

insertMenu.insertAdjacentHTML('afterbegin', menuRecipie);
