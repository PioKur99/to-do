import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent  {
  buttonText: string;
  showBackIcon: boolean;
  constructor(private _router: Router) {
    this.buttonText = !window.location.pathname.includes('about') ? 'Informacje' : 'Powrót';
    this.showBackIcon = !window.location.pathname.includes('about') ? false : true;
  }

  onInfoClick() {
    if(window.location.pathname.includes('about')) {
      this.buttonText = 'Informacje'
      this.showBackIcon = false;
      this._router.navigate(['']);
    } else {
      this.buttonText = 'Powrót'
      this.showBackIcon = true;
      this._router.navigate(['/about']);
    }
  }
}
