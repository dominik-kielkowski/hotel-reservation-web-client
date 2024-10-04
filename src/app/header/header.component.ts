import { Component } from '@angular/core';
import {ProjectInfoComponent} from "../project-info/project-info.component";
import {ContactComponent} from "../contact/contact.component";
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProjectInfoComponent, ContactComponent, LoginComponent, RegisterComponent, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activeDialog: string | null = null;

  openDialog(dialogType: string) {
    this.activeDialog = dialogType;
  }

  // Close the currently open dialog
  closeDialog() {
    this.activeDialog = null;
  }
}
