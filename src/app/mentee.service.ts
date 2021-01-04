import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenteeService {

    private url = "https://my-json-server.typicode.com/Erson3536/tech-leaders-network-fake-server/mentee";

    public searchResults: any;

    constructor(private http: HttpClient) { }

    getAllMentee() {
        return this.http.get(this.url);
    }
}