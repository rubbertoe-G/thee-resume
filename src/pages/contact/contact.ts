import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  @ViewChild('messageArea') messageArea: ElementRef;
  message: string = '';

  dataGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {

    this.dataGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),


      message: new FormControl('', [
        Validators.required,
        Validators.min(5),
        Validators.max(500)
      ])
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  resize() {
    this.messageArea.nativeElement.style.height = this.messageArea.nativeElement.scrollHeight + 'px';
  }

  sendMessage(){
    let toast = this.toastCtrl.create({
      message: 'Form is: ' + this.dataGroup.valid,
      position: 'bottom',
      showCloseButton: true
    });
  
    toast.present();
  }
}
