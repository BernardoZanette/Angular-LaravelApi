import { Routes } from '@angular/router';

import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { StudentCreateComponent } from './Pages/student-create/student-create.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent, title: 'Home Page' },
    { path: 'about-us', component: AboutPageComponent, title: 'About Us' },
    { path: 'contact-us', component: ContactPageComponent, title: 'Contact Us' },
    { path: 'students/create', component: StudentCreateComponent, title: 'Student Create' }
];
