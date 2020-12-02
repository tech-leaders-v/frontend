import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { levelList } from '../../shared/constants/level-list';
import { skillsList } from '../../shared/constants/skills-list';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css'],
})
export class MyInfoComponent implements OnInit {
  public firstFormGroup: FormGroup;
  public hidePassword = true;
  public maxToDate = new Date();
  public hideConfirmPassword = true;
  public user: any;
  public filename: string = null;
  public base64File = '../../../assets/iron-man.jpg';

  public levelList = levelList;
  public skillsList = skillsList;

  public dateOfBirthSelected;
  public classFormatSelected;
  public skillsSelected;
  public qualificationLevelSelected;
  public menteeQualificationLevelSelected;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.user = {
      userType: 'mentor', // | 'mentee';
      fullName: 'Will Smith',
      login: 'hencock',
      email: 'hencock@gmail.com',
      password: 'star11',
      classFormat: ['online'],
      skills: ['java', 'c#'],
      qualificationLevel: 'senior',
      menteeQualificationLevel: ['senior', 'middle'],
      dateOfBirth: new FormControl(new Date()),
      telegramLink: 'http://',
      aboutYou: 'Superhero',
      base64File: '../../../assets/iron-man.jpg',
    };

    this.dateOfBirthSelected = this.user.dateOfBirth;
    this.classFormatSelected = this.user.classFormat;
    this.skillsSelected = this.user.skills;
    this.qualificationLevelSelected = this.user.qualificationLevel;
    this.menteeQualificationLevelSelected = this.user.menteeQualificationLevel;

    this.firstFormGroup = this.formBuilder.group({
      fullName: new FormControl(this.user.fullName, Validators.required),
      login: new FormControl(this.user.login, Validators.required),
      email: new FormControl(
        this.user.email,
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl(this.user.password, Validators.required),
      dateOfBirth: new FormControl(this.user.dateOfBirth, Validators.required),
      telegramLink: new FormControl(
        this.user.telegramLink,
        Validators.required
      ),
      aboutYou: new FormControl(this.user.aboutYou, Validators.required),
      filename: new FormControl(this.user.filename, Validators.required),

      classFormatControl: new FormControl('', Validators.required),
      skillsControl: new FormControl('', Validators.required),
      qualificationLevelControl: new FormControl('', Validators.required),
      menteeQualificationLevelControl: new FormControl('', Validators.required),
    });

    this.firstFormGroup.get('dateOfBirth').setValue(this.user.dateOfBirth);
    this.firstFormGroup
      .get('classFormatControl')
      .setValue(this.user.classFormat);
    this.firstFormGroup.get('skillsControl').setValue(this.user.skills);
    this.firstFormGroup
      .get('qualificationLevelControl')
      .setValue(this.user.qualificationLevel);
    this.firstFormGroup
      .get('menteeQualificationLevelControl')
      .setValue(this.user.menteeQualificationLevel);

    this.firstFormGroup.controls.fullName.disable();
    this.firstFormGroup.controls.login.disable();
    this.firstFormGroup.controls.email.disable();
    this.firstFormGroup.controls.password.disable();
    this.firstFormGroup.controls.dateOfBirth.disable();
    this.firstFormGroup.controls.telegramLink.disable();
    this.firstFormGroup.controls.aboutYou.disable();
    this.firstFormGroup.controls.classFormatControl.disable();
    this.firstFormGroup.controls.skillsControl.disable();
    this.firstFormGroup.controls.qualificationLevelControl.disable();
    this.firstFormGroup.controls.menteeQualificationLevelControl.disable();
  }

  public editProfile(): void {
    this.firstFormGroup.controls.fullName.enable();
    this.firstFormGroup.controls.fullName.enable();
    this.firstFormGroup.controls.login.enable();
    this.firstFormGroup.controls.email.enable();
    this.firstFormGroup.controls.password.enable();
    this.firstFormGroup.controls.dateOfBirth.enable();
    this.firstFormGroup.controls.telegramLink.enable();
    this.firstFormGroup.controls.aboutYou.enable();
    this.firstFormGroup.controls.classFormatControl.enable();
    this.firstFormGroup.controls.skillsControl.enable();
    this.firstFormGroup.controls.qualificationLevelControl.enable();
    this.firstFormGroup.controls.menteeQualificationLevelControl.enable();
  }

  public saveProfile(): void {}
}
