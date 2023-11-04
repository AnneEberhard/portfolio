import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
 @ViewChild('contactForm') contactForm! : any; //ElementRef
 @ViewChild('nameField') nameField! : any; //ElementRef
 @ViewChild('emailField') emailField! : any; //ElementRef
 @ViewChild('messageField') messageField! : any; //ElementRef
 @ViewChild('sendButton') sendButton! : any; //ElementRef

   
 async sendMail(){
  console.log('begin')
  let nameField = this.nameField.nativeElement; 
  let emailField = this.emailField.nativeElement;
  let messageField =  this.messageField.nativeElement;
  let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
// Animation anzeigen
    const data = new FormData();
    data.append('name',nameField.value);
    data.append('email',emailField.value);
    data.append('message', messageField.value);

    await fetch("https://formspree.io/f/xwkdzbgo", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        //text anzeigen für Nachricht gesendet
        console.log('send', this.contactForm)
        nameField.disabled = false;
        emailField.disabled = false;
        messageField.disabled = false;
        sendButton.disabled = false;
    }).catch((error) => {
        console.log(error);
    });
}

}
