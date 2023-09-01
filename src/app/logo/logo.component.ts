import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {

  menuVariable:boolean=false;
  openMenu(){
    this.menuVariable =!this.menuVariable
  }
}
