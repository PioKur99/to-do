import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  open(type: string, message: string) {
    const alert = document.createElement('div');
    alert.className = `top-right alert alert-${type}`
    alert.innerHTML = message;
    document.body.appendChild(alert);
    setTimeout(() => document.body.removeChild(alert), 3000);
  }
}
