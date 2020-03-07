import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('MAngo', 20)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  onIngredientAdded(e: Ingredient) {
    this.ingredients.push(e);
    this.ingredientAdded.emit(this.ingredients);
  }
}