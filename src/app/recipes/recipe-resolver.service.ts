import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolverService {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipe = this.recipeService.getRecipe();
    if (recipe.length === 0) {
      return this.dataStorageService.fetchRecipe();
    } else return recipe;
  }
}
