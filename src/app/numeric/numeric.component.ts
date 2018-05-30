import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component( {
    selector: 'calc-numeric',
    templateUrl: './numeric.component.html',
    styleUrls: ['./numeric.component.css'],
    encapsulation: ViewEncapsulation.None
} )
export class NumericComponent implements OnInit {

    @Input() label: string;
    @Output() clickNumberEvent: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    clickNumber() {
        this.clickNumberEvent.emit(this.label);
    }
}
