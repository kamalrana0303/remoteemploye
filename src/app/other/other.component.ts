import { Component, OnChanges,  Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnChanges {
  @Input()
  title:string;
  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    for(let propertyName in changes ){
      let change= changes[propertyName];
      let current=change.currentValue;
      let previous=change.previousValue;
      console.log('Property Name '+propertyName+' current: '+current+' previous: '+previous);
    }
  }

}
