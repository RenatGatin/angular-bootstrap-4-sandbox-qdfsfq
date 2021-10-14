import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  public isColBClicked = false;
  public isColDClicked = false;
  public users = [];

  constructor(private httpClient: HttpClient) {}

  public clickColumnB(): void {
    this.isColBClicked = !this.isColBClicked;
  }

  public clickColumnD(): void {
    setTimeout(() => {
      this.isColDClicked = !this.isColDClicked;
    }, 2000);
  }

  public loadUsers(): void {
    const url = 'https://reqres.in/api/users';
    this.httpClient.get(url).subscribe(
      (response) => {
        this.users = response['data'];
        console.log(response);
      },
      (error) => {
        // handle error
        console.log(error);
      }
    );
  }
}
