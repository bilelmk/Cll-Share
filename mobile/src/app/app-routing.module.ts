import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './auth/login/login.page';
import { RegisterPage } from './auth/register/register.page';
import { ResetPage } from './auth/reset/reset.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'reset', component: ResetPage } ,

  { path: 'channelslist', loadChildren: './channelslist/channelslist.module#ChannelslistPageModule' },

  { path: 'addchannel', loadChildren: './channelslist/addchannel/addchannel.module#AddchannelPageModule' },

  { path: 'directmsg', loadChildren: './directmsg/directmsg.module#DirectmsgPageModule' },
  { path: 'channelmsg', loadChildren: './channelmsg/channelmsg.module#ChannelmsgPageModule' },
  { path: 'profil', loadChildren: './menu/profil/profil.module#ProfilPageModule' },
  { path: 'settings', loadChildren: './menu/settings/settings.module#SettingsPageModule' },
  { path: 'events', loadChildren: './menu/events/events.module#EventsPageModule' },
  { path: 'workshop', loadChildren: './menu/workshop/workshop.module#WorkshopPageModule' },
  { path: 'meeting', loadChildren: './menu/meeting/meeting.module#MeetingPageModule' },
  { path: 'memberlist', loadChildren: './memberlist/memberlist.module#MemberlistPageModule' },
  { path: 'chatbot', loadChildren: './chatbot/chatbot.module#ChatbotPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
