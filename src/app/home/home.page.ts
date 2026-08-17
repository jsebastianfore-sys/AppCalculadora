import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { CalcButton } from './calculadora';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  display = '0';
  private operand = '';
  private operator = '';

  constructor() {}

  buttons: CalcButton[] = [
    { label: 'C', value: 'clear', type: 'action' },
    { label: '0', value: '0', type: 'number' },
    { label: '.', value: '.', type: 'number' },
    { label: '/', value: '/', type: 'operator' },

    {
      label: '7',
      value: '7',
      type: 'number',
    },
    {
      label: '8',
      value: '8',
      type: 'number',
    },
    {
      label: '9',
      value: '9',
      type: 'number',
    },
    {
      label: 'x',
      value: '*',
      type: 'operator',
    },
    {
      label: '4',
      value: '4',
      type: 'number',
    },
    {
      label: '5',
      value: '5',
      type: 'number',
    },
    {
      label: '6',
      value: '6',
      type: 'number',
    },
    {
      label: '-',
      value: '-',
      type: 'operator',
    },
    {
      label: '1',
      value: '1',
      type: 'number',
    },
    {
      label: '2',
      value: '2',
      type: 'number',
    },
    {
      label: '3',
      value: '3',
      type: 'number',
    },
    {
      label: '+',
      value: '+',
      type: 'operator',
    },
  ];

  onPress(btn: CalcButton) {
    if (btn.type === 'number') {
      this.display = this.display == '0' ? btn.value : this.display + btn.value;
    } else {
      this.operand = this.display;
      this.operator = btn.value;
      this.display = '0';
    }
  }

  equal() {
    const a = parseFloat(this.operand);
    const b = parseFloat(this.display);
    let result = 0;
    switch (this.operator) {
      case '+':
        result = a + b;
        break;

      case '-':
        result = a - b;
        break;

      case '*':
        result = a * b;
        break;

      case '/':
        result = a / b;
        break;

      default:
        break;
    }

    this.display = result.toString();
    this.operand = '';
    this.operator = '';
  }
}
