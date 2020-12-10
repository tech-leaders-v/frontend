import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'summary',
            },
            {
                path: 'summary',
                loadChildren: () => import('../summary/summary.module').then(m => m.SummaryModule),
                data: {
                    title: 'Summary'
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