import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { levelList } from '../../../shared/constants/level-list';
import { skillsList } from '../../../shared/constants/skills-list';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public isLinear = false;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdformGroup: FormGroup;
  public maxToDate = new Date();
  public hidePassword = true;
  public hideConfirmPassword = true;
  public user: any;
  public filename: string = null;
  public avatarUrl = '../../../assets/iron-man.jpg';
  public base64File = '../../../assets/iron-man.jpg';

  public levelList = levelList;
  public skillsList = skillsList;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      fullName: ['', Validators.required],
      login: new FormControl('', Validators.required),
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      classFormatControl: ['', Validators.required],
      skillsControl: ['', Validators.required],
      qualificationLevelControl: ['', Validators.required],
      menteeQualificationLevelControl: ['', Validators.required],
    });
    this.thirdformGroup = this.formBuilder.group({
      dateOfBirth: ['', Validators.required],
      telegramLink: ['', Validators.required],
      aboutYou: ['', Validators.required],
      filename: ['', Validators.required],
    });
  }

  public confirmYes(): void {}

  public onFileSelect(e: any): void {
    try {
      const file = e.target.files[0];
      const fReader = new FileReader();
      fReader.readAsDataURL(file);
      fReader.onloadend = (e: any) => {
        this.filename = file.name;
        this.base64File = e.target.result;
        this.secondFormGroup.value.filename = this.base64File;
      };
    } catch (error) {
      this.filename = null;
      this.base64File = null;
      console.log('no file was selected...');
    }
  }
}
