import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a Khichdi. The taste is wonderful and it is very healthy and light on the stomach.',
      'http://3.bp.blogspot.com/-SVGSKKgGE4c/T8wvp29ex8I/AAAAAAAAAqI/YfHmTvqYICQ/s1600/mixed_veg_curry.jpg',
      [new Ingredient('Daliya', 1), new Ingredient('Garam Masala', 1)]
    ),
    new Recipe(
      'Vegetable Stir Fry',
      'Vegetable Stir Fry is made from a combination of vegetables in an Asian-inspired sauce. It can be enjoyed as is, or over rice or noodles.',
      'https://deliciouslittlebites.com/wp-content/uploads/2017/02/Vegetable-Stir-Fry-Recipe-Image-10-683x1024.jpg',
      [
        new Ingredient('broccoli', 1),
        new Ingredient('carrot', 2),
        new Ingredient('snow peas', 1),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService){}
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
