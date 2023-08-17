import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  listType = "notes";
  heartstatus = "disliked";

  changeListType(type: string) {
    this.listType = type;
  }

  changeHeartstatus() {
    if(this.heartstatus == "liked"){
      this.heartstatus = "disliked";
    } else {
      this.heartstatus = "liked";
    }
  }

}
