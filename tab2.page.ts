import { Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { enterAnimation } from '../nav-animation';

import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router, private navCtrl: NavController) {}
  navigateToPage() {
    // Define the animation for the transition!
    this.navCtrl.setDirection('forward', true, 'forward', enterAnimation);
    this.router.navigateByUrl('/accounting');
  }
}
