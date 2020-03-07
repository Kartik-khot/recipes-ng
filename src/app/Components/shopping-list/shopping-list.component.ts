import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor( private shoppingservice: ShoppingListService ) { }

  ngOnInit() {
    this.ingredients = this.shoppingservice.getIngredients();
    this.shoppingservice.ingredientAdded.subscribe( (i: Ingredient[]) => {
      this.ingredients = i;
    } )
  }

}