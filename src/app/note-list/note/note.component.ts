import { Component, Input } from '@angular/core';
import { Note } from '../../interfaces/note.interface';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input() note!:Note;
  edit = false;
  hovered = false;
  
  changeMarkedStatus(){
    this.note.marked = !this.note.marked;
  }

  deleteHovered(){
    if(!this.edit){
      this.hovered = false;
    }
  }

  logIt(){
    console.log(this.hovered);
    
  }

  openEdit(){
    this.edit = true;
  }

  closeEdit(){
    this.edit = false;
    this.saveNote();
  }

  moveToTrash(){
    this.note.type = 'trash';
  }

  moveToNotes(){
    this.note.type = 'note';
  }

  deleteNote(){

  }

  saveNote(){
    
  }

}
