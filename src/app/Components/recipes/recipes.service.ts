import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe( 'Test Recipe1', 'This is test Receipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg' ),
    new Recipe( 'Test Recipe2', 'This is test Receipe 2', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg' )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}