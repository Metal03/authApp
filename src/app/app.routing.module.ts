import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { PreciosComponent } from './components/precios/precios.component';
// import { ProtegidaComponent } from './components/protegida/protegida.component';

const routes: Routes = [
    { 
        path: 'home',
        loadChildren: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    { 
        path: 'precios', 
        loadChildren: () => import('./components/precios/precios.component').then(m => m.PreciosComponent)
    },
    { 
        path: 'protegida',
        loadChildren: () => import('./components/protegida/protegida.component').then(m => m.ProtegidaComponent)
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }