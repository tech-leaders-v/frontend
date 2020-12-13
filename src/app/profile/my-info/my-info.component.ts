import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { levelList } from '../../shared/constants/level-list';
import { skillsList } from '../../shared/constants/skills-list';
import { Input } from '@angular/core';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css'],
})
export class MyInfoComponent implements OnInit {
  @Input() user: any;
  public firstFormGroup: FormGroup;
  public hidePassword = true;
  public maxToDate = new Date();
  public hideConfirmPassword = true;
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
  }

  public saveProfile(): void {
    console.log(this.firstFormGroup.value);
  }
}
