import { Component, OnInit, Input } from '@angular/core';

@Component( {
    selector: 'calc-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css']
} )
export class DisplayComponent implements OnInit {

    @Input() value: string = '';

    constructor() { }

    ngOnInit() {
    }

}
