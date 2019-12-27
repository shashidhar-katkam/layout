import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }from '../app/home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '', component: LayoutComponent},
  // { path: 'register', component: RegisterComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'home', component:  HomeComponent, canActivate: [AuthGuard] },
  //  {path:  'uprofile', component:  UprofileComponent},
  //  {path:  'login/:username', component: LoginComponent},
  //  { path: 'forgetpassword', component: ForgetpasswordComponent},
  //  {path: '', component: LayoutComponent, // canActivate: [AuthGuard] ,
  //  children: [
  //    { path: 'home', component: HomeComponent},
  //   //  { path: 'important', component: ImportantProfilesComponent},
  //   //  { path: 'msgdetails/:MBID', component: MsgDetailsComponent},
  //   //  { path: 'editprofile', component: UprofileComponent},
  //   //  { path: 'recently', component: RecentlyviewedComponent},
  //   //  {path: 'myprofile', component: MyProfileComponent}
  //    ]
  //  },
  //  {path: 'd', component: Dashboard1Component, canActivate: [AuthGuard] ,
  //  children: [
  //    { path: 'inbox', component: InboxComponent},
  //    { path: 'important', component: ImportantProfilesComponent},
  //    { path: 'msgdetails/:MBID', component: MsgDetailsComponent},
  //    { path: 'editprofile', component: UprofileComponent},
  //    { path: 'recently', component: RecentlyviewedComponent},
  //    {path: 'myprofile', component: MyProfileComponent}
  //    ]
  //  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
