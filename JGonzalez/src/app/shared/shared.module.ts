import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentHeaderComponent } from './content-header/content-header.component';

@NgModule({
  declarations: [
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent,
    NavbarComponent,
    SidebarComponent,
    ContentHeaderComponent
  ],
  exports:[
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent,
    NavbarComponent,
    SidebarComponent,
    ContentHeaderComponent
  ],
  imports: [CommonModule],
})
export class SharedModule {}
