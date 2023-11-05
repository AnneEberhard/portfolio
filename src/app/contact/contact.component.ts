import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
 @ViewChild('contactForm') contactForm! : ElementRef;
 @ViewChild('nameField') nameField! : any;
 @ViewChild('emailField') emailField! : any;
 @ViewChild('messageField') messageField! : ElementRef;
 @ViewChild('sendButton') sendButton! : ElementRef;
 @ViewChild('privacyContainerBox') privacyContainerBox!: ElementRef;
 @ViewChild('privacyAlert') privacyAlert!: ElementRef;

 private privacyChecked = false;  

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

checkPrivacy() {
    if (!this.privacyChecked) {
        this.privacyContainerBox.nativeElement.innerHTML = '<img src="assets/img/icons/checkmarkPetrol.png" class="checkmark">';
        this.sendButton.nativeElement.disabled = false;
        this.sendButton.nativeElement.classList.add('hoverButton');
        this.privacyChecked = true;
        this.privacyAlert.nativeElement.style.display = 'none';
      } else {
        this.privacyContainerBox.nativeElement.innerHTML = '';
        this.sendButton.nativeElement.disabled = true;
        this.sendButton.nativeElement.classList.remove('hoverButton');
        this.privacyChecked = false;
        this.privacyAlert.nativeElement.style.display = 'block';
      }
}

}
