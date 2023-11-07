import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PageService } from '../page.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements  AfterViewInit {
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

    sendMessage = 'Send message'

    privacyChecked: boolean = false;
    showPrivacyAlert: boolean = false;
    showNameAlert: boolean = false;
    showEmailAlert: boolean = false;
    showMessageAlert: boolean = false;

    constructor(private pageService: PageService) {  }

    ngAfterViewInit() {
          this.assignFields();
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
            try {
                const response = await fetch("https://formspree.io/f/xwkdzbgo", {
                    method: "POST",
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    this.messageSend();
                    this.clearFields();
                    this.enableFields();
                } else {
                    console.error(`HTTP error! status: ${response.status}`);
                    this.enableFields();
                    this.showAlert('email');
                }
            } catch (error) {
                console.error('Error:', error);
            }
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
        this.nameField.disabled = true;
        this.emailField.disabled = true;
        this.messageField.disabled = true;
        this.sendButton.disabled = true;
    }

    enableFields() {
        this.nameField.disabled = false;
        this.emailField.disabled = false;
        this.messageField.disabled = false;
        this.sendButton.disabled = false;
    }

    clearFields() {
        this.nameField.value = '';
        this.emailField.value = '';
        this.messageField.value = '';
        this.nameField.classList.remove('filled');
        this.emailField.classList.remove('filled');
        this.messageField.classList.remove('filled');
    }

    sendAnimation() {
        console.log('animation')
        this.sendMessage = 'Sending...';
    }

    messageSend() {
        console.log('message send');
        this.sendMessage = 'Message sent';
        setTimeout(() => {
            this.sendMessage = 'Send message';
        }, 2000);
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
            return true;
        } else {
            return false;
        }
    }

    checkFieldsFilled(field: any, id: string) {
        if (field) {
            if (field.value.trim() !== '') {
                field.classList.remove('fieldAlert');
                this.hideAlert(id);
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
        if (id == 'name') {
            this.showNameAlert = true;
        }
        if (id == 'email') {
            this.showEmailAlert = true;
        }
        if (id == 'message') {
            this.showMessageAlert = true;
        }
    }

    hideAlert(id: string) {
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
        const id = target.name.toString();
        if (target.name === 'email') {
            if (this.checkEmail()) {
                target.classList.add('filled');
                this.hideAlert(id);
            };
        } else {
            target.classList.add('filled');
            this.hideAlert(id);
        }
    }

    checkEmail() {
        const emailValue = this.emailField.value;
        const atIndex = emailValue.indexOf('@');
        if (atIndex === -1) {
            return false; 
        }
        const beforeAt = emailValue.substring(0, atIndex);
        const afterAt = emailValue.substring(atIndex + 1);
        const regex = /^[a-zA-Z]{2,}$/;   
        if (regex.test(beforeAt) && regex.test(afterAt)) {
            console.log('true');
            return true; 
        } else {
            return false; 
        }
    }

    scrollToSection(sectionId: string) {
        console.log(sectionId);
        this.pageService.scrollToSection(sectionId);
      }

}
