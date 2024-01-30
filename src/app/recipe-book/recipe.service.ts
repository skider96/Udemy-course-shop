import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply test',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=2210&quality=70'
    ),
    new Recipe(
      'Another test Recipe',
      'This is simply test',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=2210&quality=70'
    ),
  ];


  getRecipes() {
    return this.recipes.slice();
  }
}
