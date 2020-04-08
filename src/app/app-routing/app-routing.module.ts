import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AndrewCompComponent } from '../andrew-comp/andrew-comp.component';
import { HelloComponent } from '../hello.component';

const routes: Routes = [
  {path: 'andrew', component: AndrewCompComponent},
  {path: 'hello', component:HelloComponent, data: { title: 'Test' }},
  {path: '', redirectTo: '/andrew', pathMatch:'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }