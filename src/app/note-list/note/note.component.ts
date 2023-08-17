import { Component, Input } from '@angular/core';
import { Note } from '../../interfaces/note.interface';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input() note!:Note;
  edit:boolean = false;
  
  changeLikedStatus(){
    if(this.note.liked == "liked"){
      this.note.liked = "disliked";
    } else {
      this.note.liked = "liked";
    }
  }

  openEdit(){
    this.edit = true;
  }

  closeEdit(){
    this.edit = false;
    this.saveNote();
  }

  moveToTrash(){

  }

  moveToNotes(){

  }

  deleteNote(){

  }

  saveNote(){
    
  }

}
