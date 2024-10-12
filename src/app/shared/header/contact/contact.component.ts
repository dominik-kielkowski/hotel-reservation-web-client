import {Component, EventEmitter, Output} from '@angular/core';
import {ProjectInfoComponent} from "../project-info/project-info.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ProjectInfoComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Output() closeDialog = new EventEmitter<void>();

  onClose() {
    this.closeDialog.emit();
  };
}
