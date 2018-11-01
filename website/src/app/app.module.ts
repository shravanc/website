import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
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
import { NavigationComponent } from './navigation/navigation.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { FooterComponent } from './footer/footer.component';
import { WebsiteBodyComponent } from './website-body/website-body.component';
import { GalleryThreeComponent } from './gallery-three/gallery-three.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ZigZagLayoutComponent,
    HorizontalCardsLayoutsComponent,
    VerticalCardsLayoutsComponent,
    NewsfeedsLayoutsComponent,
    NewsfeedsOneLayoutsComponent,
    NewsfeedsTwoLayoutsComponent,
    ProjectOneLayoutsComponent,
    ProjectTwoLayoutsComponent,
    ProjectThreeLayoutsComponent,
    ProjectFourLayoutsComponent,
    CarousalOneLayoutsComponent,
    CarousalTwoLayoutsComponent,
    CarousalThreeLayoutsComponent,
    CarousalFourLayoutsComponent,
    CarousalFiveLayoutsComponent,
    GalleryOneComponent,
    GalleryTwoComponent,
    NavigationComponent,
    ListServiceComponent,
    FooterComponent,
    WebsiteBodyComponent,
    GalleryThreeComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
