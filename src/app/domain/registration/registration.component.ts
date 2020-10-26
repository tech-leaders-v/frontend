import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  public isLinear = false;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdformGroup: FormGroup;
  public maxToDate = new Date();
  public hide = true;
  public hide2 = true;
  public user: any;
  public filename: string = null;
  public base64File = '../../../assets/iron-man.jpg';

  public userControl = new FormControl('', Validators.required);
  public classFormatControl = new FormControl('', Validators.required);
  public workControl = new FormControl('', Validators.required);
  public skillsControl = new FormControl();
  public levelControl = new FormControl('', Validators.required);

  public skillsList: string[] = ['JavaScript', 'HTML', 'CSS', 'Angular', 'React', 'Vue', 'Node.js', 'C#', 'Java', 'Kotlin', 'Swift', 'C', 'PHP', 'Python'];
  public levelList: string[] = ['Beginner', 'Junior', 'Middle', 'Senior'];

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
        fullName: ['', Validators.required],
        login: new FormControl('', Validators.required),
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      });
    this.secondFormGroup = this.formBuilder.group({
        classFormatControl: ['', Validators.required],
        skillsControl: ['', Validators.required],
        workControl: ['', Validators.required],
        levelControl: ['', Validators.required],
    });
    this.thirdformGroup = this.formBuilder.group({
      dateOfBirth: ['', Validators.required],
      aboutYou: ['', Validators.required],
      filename: ['', Validators.required]
  });
  }

  confirmYes(): void {

  }

  onFileSelect(e: any): void {
    try {
      const file = e.target.files[0];
      const fReader = new FileReader();
      fReader.readAsDataURL(file);
      fReader.onloadend = (e: any) => {
        this.filename = file.name;
        this.base64File = e.target.result;
        this.secondFormGroup.value.filename = this.base64File;
        console.log(this.userControl);
      };
    } catch (error) {
      this.filename = null;
      this.base64File = null;
      console.log('no file was selected...');
    }
  }

}


