import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
class appClass {
  constructor(
    public userId: number,
    public id: number,
    public title: string,
    public completed: string
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'firstapp';
  app: appClass[] = [];
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.getTodos();
  }
  getTodos() {
    this.httpClient
      .get<any>('http://jsonplaceholder.typicode.com/todos')
      .subscribe((responce) => {
        console.log('Responce ' + responce);
        this.app = responce;
        // console.log(this.app);
      });
  }
}
