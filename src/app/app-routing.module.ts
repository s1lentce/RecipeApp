import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeResolverService } from './recipes/recipe-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const AppRouter: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    // loadComponent: () =>
    //   import('./recipes/recipes.component').then((m) => m.RecipesComponent),
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new',
        // loadComponent: () =>
        //   import('./recipes/recipe-edit/recipe-edit.component').then(
        //     (m) => m.RecipeEditComponent
        //   ),
        component: RecipeEditComponent,
      },
      {
        path: ':id',
        // loadComponent: () =>
        //   import('./recipes/recipe-detail/recipe-detail.component').then(
        //     (m) => m.RecipeDetailComponent
        //   ),
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService],
      },
      {
        path: ':id/edit',
        // loadComponent: () =>
        //   import('./recipes/recipe-edit/recipe-edit.component').then(
        //     (m) => m.RecipeEditComponent
        //   ),
        component: RecipeEditComponent,
        resolve: [RecipeResolverService],
      },
    ],
  },
  {
    path: 'shopping-list',
    // loadComponent: () =>
    //   import('./shopping-list/shopping-list.component').then(
    //     (m) => m.ShoppingListComponent
    //   ),
    component: ShoppingListComponent,
  },
  {
    path: 'auth',
    // loadComponent: () =>
    //   import('./auth/auth.component').then((m) => m.AuthComponent),
    component: AuthComponent,
  },
  {
    path: '**',
    redirectTo: '/recipes',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRouter)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
