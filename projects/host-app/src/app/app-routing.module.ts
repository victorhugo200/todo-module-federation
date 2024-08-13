import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const MFE_URL = "http://localhost:4300/remoteEntry.js";
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent },
  {path: 'todo',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: MFE_URL,
        remoteName: 'mfeApp',
        exposedModule: './TodoModule'
      }).then((c) => c.TodoModule).catch((error) => console.log(error))
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
