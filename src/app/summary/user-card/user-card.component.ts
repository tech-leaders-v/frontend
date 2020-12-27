import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/models/UserModel';

@Component({
    selector: 'user-card',
    templateUrl: './user-card.template.html',
    styleUrls: ['./user-card.style.css']
})
export class UserCardComponent implements OnInit {
    
    @Input() user: UserModel;

    constructor() { }

    ngOnInit(): void {
    }

}
