import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  enterName = "Ajith";
  parentData = "";
  value = "";

  title = 'cIntegration';

  TransferData() {
    this.parentData = this.enterName;
  }

  sendData(value:any) {
    this.value = value;
  }

}
