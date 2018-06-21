import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {routes} from './routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { SkillcontentComponent } from './skillcontent/skillcontent.component';
import { PostcontentComponent } from './postcontent/postcontent.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LandingpageComponent,
    SkillcontentComponent,
    PostcontentComponent
       
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
