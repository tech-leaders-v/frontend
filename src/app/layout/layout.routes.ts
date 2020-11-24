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
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'mentors',
                component: MentorsComponent,
            },
            {
                path: 'mentee',
                component: MenteeComponent,
            },
        ]
    },
]