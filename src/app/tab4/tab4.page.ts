import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ValidatorFn, Validators } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})

export class Tab4Page {

  feedbackForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) {
    this.feedbackForm = this.formBuilder.group({
      name: ['', [Validators.required, this.onlyAlphabets()]],
      feedback: ['', Validators.required]
    });
  }

  onlyAlphabets(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const valid = /^[a-zA-Z\s]*$/.test(control.value);
      return valid ? null : { 'invalidName': { value: control.value } };
    };
  }

  async submitForm() {
    if (this.feedbackForm.valid) {
      const formData = this.feedbackForm.value;
      console.log('Form submitted:', formData);

      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Thanks ' + formData['name'] +' for your feedback!',
        buttons: ['OK']
      });

      await alert.present();

      this.feedbackForm.reset();
    }
  }
}