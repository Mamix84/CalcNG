import { Component } from '@angular/core';

@Component( {
    selector: 'calc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
} )
export class AppComponent {
    title = 'calc';

    display: string = '';
    operations: string = '';

    constuctor() {
    }

    addNumber( value: string ) {
        this.display += value;
    }
    
    addParenthesis(value: string){
        if(this.display === ''){
            this.operations+=value;
        }else{
            this.operations += this.display + value;
            this.display = '';
        }
    }

    add() {
        this.operations += this.display + '+';
        this.display = '';
    }

    subtract() {
        this.operations += this.display + '-';
        this.display = '';
    }

    multiply() {
        this.operations += this.display + '×';
        this.display = '';
    }

    divide() {
        this.operations += this.display + '÷';
        this.display = '';
    }
    
    equals(){
        this.operations+=this.display;
        let operationsEval = this.operations.replace('×', '*');
        operationsEval = operationsEval.replace('÷', '/');
        operationsEval = operationsEval.replace(',', '.');
        this.display = eval(operationsEval);
        this.display = this.display + '';
        this.display = this.display.replace('.', ',');
        this.operations = '';
    }
    
    erase(){
        this.operations = '';
        this.display = '';
    }

    
    eraseLast(){
        this.display=this.display.slice(0, this.display.length-1);
    }
}
