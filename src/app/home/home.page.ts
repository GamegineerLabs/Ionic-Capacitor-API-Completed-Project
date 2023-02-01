import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private httpService: HttpService) {}

  // nativeCall() {
  //   console.log('Button Pressed!');
  // }

  nativeCall() {
    this.httpService.doPost('https://api.segment.io/v1/track')
      .subscribe(
        (res: any) => {
          console.log(res);
        }
      );
  }


}
