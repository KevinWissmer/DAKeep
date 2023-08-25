import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.scss']
})
export class AddNoteDialogComponent {
  @Output() addDialogClosed: EventEmitter<boolean> = new EventEmitter();
}
