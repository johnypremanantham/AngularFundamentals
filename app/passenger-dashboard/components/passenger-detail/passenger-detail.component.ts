import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";

//Component decorator object
@Component({
  selector: 'passenger-detail',
  template: `
  <div style="border: dotted; margin-bottom: 20px">
    
    <div *ngIf="editing">
      <input 
        type="text" 
        [value]="detail.fullname" 
        (input)="onNameChange(name.value)"
        #name>
      
    </div>
    
    <h2 *ngIf="!editing">NAME: {{detail.fullname}}</h2>
    
    
   <!-- <p>{{detail | json}}</p>-->
    <div>
      date: {{detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in'}}
    </div>

    <div>
      Children: {{detail.children?.length || 0}}
    </div>
    
    <button (click)="onEdit()">
      {{editing ? 'Done' : 'Edit'}}
    </button> 
    
    <button (click)="onRemove()">
     Remove
    </button>
  </div>
  `
})

export class PassengerDetailComponent implements OnChanges{
  @Input()
  detail: Passenger;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['detail']) {
      this.detail = Object.assign({}, changes['detail'].currentValue);
    }
  }

  onNameChange(name: string){
    this.detail.fullname = name;
  }

  onRemove(){
    this.remove.emit(this.detail);
  }

  onEdit(){
    if(this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;

  }

}
