import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppGuard} from './app.guard.service';
import {Error404Component} from './messages/error404.component';
import {LoginComponent} from './auth/login.component';
import {DefaultLayoutComponent} from './layout';

const appRoutes: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        data: {
            title: 'Trang quản trị'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
                data: {
                    title: 'Bảng điều khiển'
                }
            }
            , {
                path: 'bases',
                loadChildren: './modules/bases/bases.module#BasesModule',
                data: {
                    title: 'Phôi'
                }
            }
            , {
                path: 'orders',
                loadChildren: './modules/orders/orders.module#OrdersModule',
                data: {
                    title: 'Đơn hàng'
                }
            }
            , {
                path: 'customers',
                loadChildren: './modules/customers/customers.module#CustomersModule',
                data: {
                    title: 'Khách hàng'
                }
            }
        ],
        canActivate: [AppGuard]
    },
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: '**', component: Error404Component, pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
