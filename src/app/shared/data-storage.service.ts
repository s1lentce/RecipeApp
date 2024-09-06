import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}
  storeRecipe() {
    const recipes = this.recipeService.getRecipe();
    this.http
      .put(
        'https://recipeapp-67482-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response: Recipe) => {
        console.log(response);
      });
  }
  fetchRecipe() {
    return this.http
      .get<Recipe[]>(
        'https://recipeapp-67482-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        tap((recipes) => {
          this.recipeService.setRecipe(recipes);
        })
      );
  }
}
