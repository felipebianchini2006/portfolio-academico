import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DisciplinasComponent } from './pages/disciplinas/disciplinas.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'disciplinas', component: DisciplinasComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: '' },
];


