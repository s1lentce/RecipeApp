import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
export class ShoppingListService {
  startedEditing = new Subject<number>();
  addIngredientEvent = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('apple', 3),
    new Ingredient('orange', 1),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.addIngredientEvent.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.addIngredientEvent.next(this.ingredients.slice());
  }
}
