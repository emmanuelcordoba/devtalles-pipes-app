import { Component } from '@angular/core';
import {interval, Observable, tap} from "rxjs";

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public  name: string = 'Emmanuel';
  public  gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient():void {
    this.name = 'Marianela';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = [
    'Emmanuel',
    'Romina',
    'Tiago',
    'Marianela',
    'Susana',
    'Carlos'
  ];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Emmanuel',
    age: 35,
    address: 'Tucuman, Argentina'
  }

  // Async Pipe
  public myObservableTime: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('Tenemos data en la promesa.');
      this.person.name = 'Emmanuel Cordoba'
      resolve('Tenemos data en la promesa.');
    }, 3500)
  })


}
