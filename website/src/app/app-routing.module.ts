import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ZigZagLayoutComponent } from './zig-zag-layout/zig-zag-layout.component';
import { HorizontalCardsLayoutsComponent } from './horizontal-cards-layouts/horizontal-cards-layouts.component';
import { VerticalCardsLayoutsComponent } from './vertical-cards-layouts/vertical-cards-layouts.component';
import { NewsfeedsLayoutsComponent } from './newsfeeds-layouts/newsfeeds-layouts.component';
import { NewsfeedsOneLayoutsComponent } from './newsfeeds-one-layouts/newsfeeds-one-layouts.component';
import { NewsfeedsTwoLayoutsComponent } from './newsfeeds-two-layouts/newsfeeds-two-layouts.component';
import { ProjectOneLayoutsComponent } from './project-one-layouts/project-one-layouts.component';
import { ProjectTwoLayoutsComponent } from './project-two-layouts/project-two-layouts.component';
import { ProjectThreeLayoutsComponent } from './project-three-layouts/project-three-layouts.component';
import { ProjectFourLayoutsComponent } from './project-four-layouts/project-four-layouts.component';
import { CarousalOneLayoutsComponent } from './carousal-one-layouts/carousal-one-layouts.component';
import { CarousalTwoLayoutsComponent } from './carousal-two-layouts/carousal-two-layouts.component';
import { CarousalThreeLayoutsComponent } from './carousal-three-layouts/carousal-three-layouts.component';
import { CarousalFourLayoutsComponent } from './carousal-four-layouts/carousal-four-layouts.component';
import { CarousalFiveLayoutsComponent } from './carousal-five-layouts/carousal-five-layouts.component';
import { GalleryOneComponent } from './gallery-one/gallery-one.component';
import { GalleryTwoComponent } from './gallery-two/gallery-two.component';
import { GalleryThreeComponent } from './gallery-three/gallery-three.component';
import { NavigationComponent } from './navigation/navigation.component';


const routes: Routes = [
  {
    path: '',
    component: NavigationComponent
  },
  {
    path: 'zig-zag',
    component: ZigZagLayoutComponent
  },
  {
    path: 'horizontal-cards',
    component: HorizontalCardsLayoutsComponent
  },
  {
    path: 'vertical-cards',
    component: VerticalCardsLayoutsComponent
  },
  {
    path: 'newsfeeds',
    component: NewsfeedsLayoutsComponent
  },
  {
    path: 'newsfeeds-one',
    component: NewsfeedsOneLayoutsComponent
  },
  {
    path: 'newsfeeds-two',
    component: NewsfeedsTwoLayoutsComponent
  },
  {
    path: 'project-one',
    component: ProjectOneLayoutsComponent
  },
  {
    path: 'project-two',
    component: ProjectTwoLayoutsComponent
  },
  {
    path: 'project-three',
    component: ProjectThreeLayoutsComponent
  },
  {
    path: 'project-four',
    component: ProjectFourLayoutsComponent
  },
  {
    path: 'carousal-one',
    component: CarousalOneLayoutsComponent
  },
  {
    path: 'carousal-two',
    component: CarousalTwoLayoutsComponent
  },
  {
    path: 'carousal-three',
    component: CarousalThreeLayoutsComponent
  },
  {
    path: 'carousal-four',
    component: CarousalFourLayoutsComponent
  },
  {
    path: 'carousal-five',
    component: CarousalFiveLayoutsComponent
  },
  {
    path: 'gallery-one',
    component: GalleryOneComponent
  },
  {
    path: 'gallery-two',
    component: GalleryTwoComponent
  },
  {
    path: 'gallery-three',
    component: GalleryThreeComponent
  },
  {
    path: 'login',
    component: UsersComponent
  },
  {
    path: 'register',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),  BrowserModule,   MDBBootstrapModule.forRoot() ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
