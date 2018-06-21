import {Routes}  from '@angular/Router';
import { SkillcontentComponent } from './skillcontent/skillcontent.component';
import { PostcontentComponent } from './postcontent/postcontent.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';


export const routes : Routes=[{
    path : 'landingpage',
component:  LandingpageComponent
},{
path : 'posts',
component :  PostcontentComponent
},{
    path: 'skills',
    component: SkillcontentComponent
        
}]