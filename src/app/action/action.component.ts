import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component( {
    selector: 'calc-action',
    templateUrl: './action.component.html',
    styleUrls: ['./action.component.css']
} )
export class ActionComponent implements OnInit {

    @Input() label: string;
    @Output() clickActionEvent: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }
    
    clickAction(){
        this.clickActionEvent.emit(this.label);
    }

}
