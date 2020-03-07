import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { RecipeDetailComponent } from './Components/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './Components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './Components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { DropDownDirective } from './Components/shared/dropdown.directive';
import { ShoppingListService } from './Components/shopping-list/shopping-list.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, RecipeDetailComponent, RecipeListComponent, RecipeItemComponent, RecipesComponent, ShoppingListComponent, ShoppingListEditComponent, DropDownDirective ],
  providers: [ ShoppingListService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
