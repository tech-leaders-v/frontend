import { Routes } from '@angular/router';
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
                data: {
                    title: 'Dashboard'
                  }
            },
            {
                path: 'mentors',
                loadChildren: () => import('../mentors/mentors.module').then(m => m.MentorsModule),
                data: {
                    title: 'Mentors'
                  }
            },
            {
                path: 'mentee',
                loadChildren: () => import('../mentee/mentee.module').then(m => m.MenteeModule),
                data: {
                    title: 'Mentee'
                  }
            },
        ]
    },
]