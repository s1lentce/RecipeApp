import { Component, EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'Test',
      'https://mommyshomecooking.com/wp-content/uploads/2018/03/Easy-Whole-30-Chicken-and-Asparagus-Skillet-1.jpg',
      [new Ingredient('bread', 5), new Ingredient('sausage', 5)]
    ),
    new Recipe(
      'Jest',
      'Test',
      'https://mommyshomecooking.com/wp-content/uploads/2018/03/Easy-Whole-30-Chicken-and-Asparagus-Skillet-1.jpg',
      []
    ),
  ];
  getRecipe() {
    return this.recipes.slice();
  }
  getRecipeByIndex(index: number) {
    return this.recipes[index];
  }
  addIngToList(ingredient: Ingredient[]) {
    this.shoppingListService.ingredients.push(...ingredient);
    this.shoppingListService.addIngredientEvent.next(
      this.shoppingListService.ingredients.slice()
    );
  }
}
