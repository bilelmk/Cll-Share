import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPage } from './user.page';
const routes: Routes = [
    {
        path: '',
        component: UserPage,
        children: [
            {
                path: 'channels',
                children: [
                    {
                        path: '',
                        loadChildren: './channels/channels.module#ChannelsPageModule'
                    },
                    {
                        path: ':channelId',
                        loadChildren: './channels/channel-lab/channel-lab.module#ChannelLabPageModule'
                    }
                ]
            },
            {
                path: 'members',
                children: [
                    {
                        path: '',
                        loadChildren: './members/members.module#MembersPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/user',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/user',
        pathMatch: 'full'
    },
  { path: 'channel-lab', loadChildren: './channels/channel-lab/channel-lab.module#ChannelLabPageModule' }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
