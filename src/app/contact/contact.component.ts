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

   
    nameField: any;
    emailField: any;
    messageField: any;
    sendButton: any;
    privacyContainerBox: any;
    privacyAlert: any;
    nameAlert: any;
    emailAlert: any;
    messageAlert: any;

    privacyChecked: boolean = false;
    showPrivacyAlert: boolean = false;
    showNameAlert: boolean = false;
    showEmailAlert: boolean = false;
    showMessageAlert: boolean = false;

    async ngOnInit() {
        setTimeout(() => {
            this.assignFields();
        }, 100);
    }

    assignFields() {
        this.nameField = this.nameFieldElement?.nativeElement;
        this.emailField = this.emailFieldElement?.nativeElement;
        this.messageField = this.messageFieldElement?.nativeElement;
        this.sendButton = this.sendButtonElement?.nativeElement;
        this.privacyContainerBox = this.privacyContainerBoxElement?.nativeElement;
        this.privacyAlert = this.privacyAlertElement?.nativeElement;
        this.nameAlert = this.nameAlertElement?.nativeElement;
        this.emailAlert = this.emailAlertElement?.nativeElement;
        this.messageAlert = this.messageAlertElement?.nativeElement;
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
            this.showPrivacyAlert = false;

        } else {
            this.privacyContainerBox.innerHTML = '';
            this.sendButton.disabled = true;
            this.sendButton.classList.remove('hoverButton');
            this.privacyChecked = false;
            this.showPrivacyAlert = true;
    
        }
    }

    fieldsFilled() {
        let nameFieldCheck = this.checkFieldsFilled(this.nameField, 'name');
        let emailFieldCheck = this.checkFieldsFilled(this.emailField, 'email');
        let messageFieldCheck = this.checkFieldsFilled(this.messageField, 'message');
        if (nameFieldCheck && emailFieldCheck && messageFieldCheck) {
            console.log('fields filled')
            return true;
        } else {
            console.log('fields not filled')
            return false;
        }
    }

    checkFieldsFilled(field: any, id: string) {
        if (field) {
            if (field.value.trim() !== '') {
                field.classList.remove('fieldAlert');
                this.HideAlert(id);
                return true;
            } else {
                field.classList.add('fieldAlert');
                this.showAlert(id);

                return false;
            }
        } else {
            return false
        }
    }

    showAlert(id: string) {
        console.log('field Alert')
        if (id == 'name') {
            console.log(id, this.showNameAlert)
            this.showNameAlert = true;
            console.log(id, this.showNameAlert)
        }
        if (id == 'email') {
            this.showEmailAlert = true;
        }
        if (id == 'message') {
            this.showMessageAlert = true;
        }
    }

    HideAlert(id: string) {
        if (id == 'name') {
            this.showNameAlert = false;
        }
        if (id == 'email') {
            this.showEmailAlert = false;
        }
        if (id == 'message') {
            this.showMessageAlert = false;
        }
    }

    checkInputFields(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target.name === 'email') {
            this.checkEmail();
        } else {
            target.classList.add('filled');
        }
    }

    addFilledClass(event: Event, alertElement: HTMLElement) {
        const target = event.target as HTMLInputElement;
        if (target.name === 'email') {
            this.checkEmail();
        } else {
            target.classList.add('filled');
            this.hideAlert(alertElement);
        }
    }


    checkEmail() {
        const emailField = this.emailField.nativeElement;
        this.showEmailAlert = !emailField.value.includes('@');
    }

    hideAlert(alertElement: HTMLElement) {
        alertElement.style.display = 'none';
    }


}
