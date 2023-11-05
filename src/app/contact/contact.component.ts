import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    @ViewChild('contactForm') contactFormElement!: ElementRef;
    @ViewChild('nameField') nameFieldElement!: ElementRef;
    @ViewChild('emailField') emailFieldElement!: ElementRef;
    @ViewChild('messageField') messageFieldElement!: ElementRef;
    @ViewChild('sendButton') sendButtonElement!: ElementRef;
    @ViewChild('privacyContainerBox') privacyContainerBoxElement!: ElementRef;
    @ViewChild('privacyAlert') privacyAlertElement!: ElementRef;
    @ViewChild('nameAlert') nameAlertElement!: ElementRef;
    @ViewChild('emailAlert') emailAlertElement!: ElementRef;
    @ViewChild('messageAlert') messageAlertElement!: ElementRef;

    private privacyChecked = false;
    nameField: any;
    emailField: any;
    messageField: any;
    sendButton: any;
    privacyContainerBox: any;
    privacyAlert: any;
    nameAlert: any;
    emailAlert: any;
    messageAlert: any;

    // fieldsfilled: boolean = false;

    async ngOnInit() {
        setTimeout(() => {
            this.assignFields();
        }, 100);
    }

    assignFields() {
        this.nameField = this.nameFieldElement.nativeElement;
        this.emailField = this.emailFieldElement.nativeElement;
        this.messageField = this.messageFieldElement.nativeElement;
        this.sendButton = this.sendButtonElement.nativeElement;
        this.privacyContainerBox = this.privacyContainerBoxElement.nativeElement
        this.privacyAlert = this.privacyAlertElement.nativeElement;
        this.nameAlert = this.nameAlertElement.nativeElement
        this.emailAlert = this.emailAlertElement.nativeElement
        this.messageAlert = this.messageAlertElement.nativeElement
    }

    async sendMail(event: Event) {
        event.preventDefault();
        if (this.fieldsFilled()) {
            const data = this.collectdata();
            this.disableFields();
            this.sendAnimation();
            await fetch("https://formspree.io/f/xwkdzbgo", {
                method: "POST",
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(() => {
                this.messageSend();
                this.enableFields();
            }).catch((error) => {
                console.log(error);
            });
            this.clearFields()
        }
    }

    collectdata() {
        const data = new FormData();
        data.append('name', this.nameField.value);
        data.append('email', this.emailField.value);
        data.append('message', this.messageField.value);
        return data;
    }

    disableFields() {
        this.nameField.disabled = false;
        this.emailField.disabled = false;
        this.messageField.disabled = false;
        this.sendButton.disabled = false;
    }

    enableFields() {
        this.nameField.disabled = true;
        this.emailField.disabled = true;
        this.messageField.disabled = true;
        this.sendButton.disabled = true;
    }

    clearFields() {
        this.nameField.value = '';
        this.emailField.value = '';
        this.messageField.value = '';
    }

    sendAnimation() {
        console.log('animation')
    }

    messageSend() {
        console.log('message send')
    }

    checkPrivacy() {
        if (!this.privacyChecked) {
            this.privacyContainerBox.innerHTML = '<img src="assets/img/icons/checkmarkPetrol.png" class="checkmark">';
            this.sendButton.disabled = false;
            this.sendButton.classList.add('hoverButton');
            this.privacyChecked = true;
            this.privacyAlert.style.display = 'none';
        } else {
            this.privacyContainerBox.innerHTML = '';
            this.sendButton.disabled = true;
            this.sendButton.classList.remove('hoverButton');
            this.privacyChecked = false;
            this.privacyAlert.style.display = 'block';
        }
    }

    fieldsFilled() {
        this.checkFields(this.nameField, this.nameAlert);
        this.checkFields(this.emailField, this.emailAlert);
        this.checkFields(this.messageField, this.messageAlert);
        if (this.nameField.value.trim() !== '' &&
            this.emailField.value.trim() !== '' &&
            this.messageField.value.trim() !== '') {
            console.log('fields filled')
            return true;
        } else {
            console.log('fields not filled')
            return false;
        }
    }

    checkFields(field: any, alertElement: any) {
        const fieldElement = field;
        const alert = alertElement;
        console.log('check fields');
        if (fieldElement.value.trim() !== '') {
            fieldElement.classList.remove('fieldAlert');
            alert.style.display = 'none';
            console.log(fieldElement);
            console.log(' not empty');
        } else {
            fieldElement.classList.add('fieldAlert');
            alert.style.display = 'block';
            console.log(fieldElement);
            console.log('empty');
        }
    }
}
