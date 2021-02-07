import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './pages/slider/slider.component';
import { AboutComponent } from './pages/about/about.component';
import { CausesComponent } from './pages/causes/causes.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsComponent } from './pages/news/news.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './pages/footer/footer.component';



const routes: Routes = [
  {path : '',component : HeaderComponent},
  {path : 'home',component : HomeComponent},
  {path : 'slider',component : SliderComponent},
  {path : 'about',component : AboutComponent},
  {path : 'causes',component : CausesComponent},
  {path : 'gallery',component : GalleryComponent},
  {path : 'news',component : NewsComponent},
  {path : 'login',component : LoginComponent},
  {path :'contact',component:ContactComponent},
  
  {path : 'footer',component : FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
