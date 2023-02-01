import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  doPost(url: string) {
//Options that are necessary to make the POST request
    const options: HttpOptions = {
      url,
      headers: {
        Authorization: 'Basic NFBaczZUR0FYUm1QNzRZM1c5M1FVSFdBUUk4ZnIzaTg6QXBwbGU0bGlmZSE=',
        'Content-Type': 'application/json'
      },
      data: {
        //This is a test data object to be tracked so try this or create your own!
        userId: "019mr8mf4r",
        event: "API Called",
        properties: {
          name: "Button Was Clicked",
          "Tag": 'Capacitor'
        },
        context: {
          "ip": "24.5.68.47"
        }
      },
    };
    return from(CapacitorHttp.post(options));
  }

}
