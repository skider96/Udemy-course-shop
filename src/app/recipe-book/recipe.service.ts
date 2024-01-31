import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'This is simply test',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=2210&quality=70'
    , [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe(
      'Big Fat Burger',
      'This is simply test',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=2210&quality=70'
    , [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ]),
  ];

constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList (ingredients: Ingredient[]) {
this.slService.addIngredients(ingredients);
  }

}
