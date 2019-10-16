import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule', canLoad: [AuthGuard] },
  { path: 'channels', loadChildren: './user/channels/channels.module#ChannelsPageModule' },
  { path: 'members', loadChildren: './user/members/members.module#MembersPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
