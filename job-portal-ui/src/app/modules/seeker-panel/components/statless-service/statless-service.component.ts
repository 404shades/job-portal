import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statless-service',
  templateUrl: './statless-service.component.html',
  styleUrls: ['./statless-service.component.scss']
})
export class StatlessServiceComponent implements OnInit {

  @Input() title:string|undefined;
  @Input() count:number|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
