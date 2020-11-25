import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MenteeComponent } from '../mentee/mentee.component';
import { MentorsComponent } from '../mentors/mentors.component';
import { LayoutComponent } from './layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
            },
            {
                path: 'dashboard',
                loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
            },
            {
                path: 'mentors',
                loadChildren: () => import('../mentors/mentors.module').then(m => m.MentorsModule),
            },
            {
                path: 'mentee',
                loadChildren: () => import('../mentee/mentee.module').then(m => m.MenteeModule),
            },
        ]
    },
]