import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardComponent } from './card/card.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    CardBodyComponent,
    CardFooterComponent,  
    CardHeaderComponent,  
    ContentHeaderComponent,
    NavbarComponent,
    SidebarComponent,
    ContentHeaderComponent,
    CardComponent
  ],
  exports: [
    CardBodyComponent,
    CardFooterComponent,    
    CardHeaderComponent,  
    ContentHeaderComponent,
    NavbarComponent,
    SidebarComponent,
    ContentHeaderComponent,
    CardComponent
  ],
  imports: [CommonModule

  ]
})
export class SharedModule { }
