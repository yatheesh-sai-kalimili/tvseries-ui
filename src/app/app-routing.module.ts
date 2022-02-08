import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent  } from "./components/admin/admin.component";
import { HomeComponent  } from "./components/home/home.component";
import { ViewRegistrationComponent } from "./components/view-registration/view-registration.component";
import { tvShowResolver } from './services/tvshow-resolver.serice';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent
},
{
  path:'admin/view/:id',
  component: ViewRegistrationComponent,
  resolve:{ resolvedData: tvShowResolver }
},
{
  path: '',
  component: AdminComponent
},
{
  path:'form',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
