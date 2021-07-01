import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { enterAnimation } from '../nav-animation';

import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  dummyList: any;


  constructor(
    private router: Router, private navCtrl: NavController
  ) {}

  logScrollStart(event) {
    console.log("logScrollStart : When Scroll Starts", event);
  }

  logScrolling(event) {
    console.log("logScrolling : When Scrolling", event);
  }

  logScrollEnd(event) {
    console.log("logScrollEnd : When Scroll Ends", event);
  }

  ScrollToBottom() {
    this.content.scrollToBottom(1500);
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  ScrollToPoint(X, Y) {
    this.content.scrollToPoint(X, Y, 1500);
  }
  navigateToPage() {
    // Define the animation for the transition!
    this.navCtrl.setDirection('forward', true, 'forward', enterAnimation);
    this.router.navigateByUrl('/accounting');
  }
  scrollToBeg() {
    var titleELe = document.getElementById("beg");
    this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
  }
  ScrollToMis() {
    var titleELe = document.getElementById("mis");
    this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
  }

  ScrollToVis() {
    var titleELe = document.getElementById("vis");
    this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
  }

  ScrollToEve() {
    var titleELe = document.getElementById("eve");
    this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
  }
  ScrollToSta() {
    var titleELe = document.getElementById("staff");
    this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
  }
  ScrollToAbout() {
    var titleELe = document.getElementById("about");
    this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
  }

}
