import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { MenulistComponent } from './sidebar/menulist/menulist.component';
import { UserlistComponent } from './container/userlist/userlist.component';
import { LogoComponent } from './header/logo/logo.component';
import { UsernameComponent } from './header/username/username.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ContainerComponent,
    MenulistComponent,
    UserlistComponent,
    LogoComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
