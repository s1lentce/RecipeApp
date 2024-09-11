import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { exhaustMap, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}
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
    return this.authService.user
      .pipe(
        take(1),
        exhaustMap((user) => {
          return this.http.get<Recipe[]>(
            'https://recipeapp-67482-default-rtdb.firebaseio.com/recipes.json',
            { params: new HttpParams().set('auth', user.token) }
          );
        }),
        tap((recipes) => {
          this.recipeService.setRecipe(recipes);
        })
      )
      .subscribe();
  }
}
