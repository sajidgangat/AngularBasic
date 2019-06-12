import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {
 @Input() menu;
  constructor() { }

  ngOnInit() {
  }

}
