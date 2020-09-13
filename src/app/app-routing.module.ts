import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'splash', loadChildren: () => import('./modules/front/front.module').then(m => m.FrontModule) },
  { path: '', loadChildren: () => import('./modules/tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'products', loadChildren: () => import('./modules/products/product.module').then(m => m.ProductModule) },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
