import { Component, EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeChanges = new Subject<Recipe[]>();
  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    // new Recipe(
    //   'Test',
    //   'Test',
    //   'https://mommyshomecooking.com/wp-content/uploads/2018/03/Easy-Whole-30-Chicken-and-Asparagus-Skillet-1.jpg',
    //   [new Ingredient('bread', 5), new Ingredient('sausage', 5)]
    // ),
    // new Recipe(
    //   'Jest',
    //   'Test',
    //   'https://mommyshomecooking.com/wp-content/uploads/2018/03/Easy-Whole-30-Chicken-and-Asparagus-Skillet-1.jpg',
    //   []
    // ),
  ];
  getRecipe() {
    return this.recipes.slice();
  }
  getRecipeByIndex(index: number) {
    return this.recipes[index];
  }
  addIngToList(ingredient: Ingredient[]) {
    this.shoppingListService.ingredients.push(...ingredient);
    this.shoppingListService.ingredientChanges.next(
      this.shoppingListService.ingredients.slice()
    );
  }
  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipeChanges.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanges.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanges.next(this.recipes.slice());
  }
  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanges.next(this.recipes.slice());
  }
}
