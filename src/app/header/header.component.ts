import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    name="sajid";
    imagepath = "https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018__340.png"

  constructor() { }

  ngOnInit() {
  }

}
