import '../src/sass/main.scss';
import arrayRecipe from '../src/templates/menu.json';
import markupRecipeTmp from '../src/templates/markup-recipe.hbs';

const menuRecipie = markupRecipeTmp(arrayRecipe);
