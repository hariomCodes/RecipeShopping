import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'http://3.bp.blogspot.com/-SVGSKKgGE4c/T8wvp29ex8I/AAAAAAAAAqI/YfHmTvqYICQ/s1600/mixed_veg_curry.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'http://3.bp.blogspot.com/-SVGSKKgGE4c/T8wvp29ex8I/AAAAAAAAAqI/YfHmTvqYICQ/s1600/mixed_veg_curry.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
