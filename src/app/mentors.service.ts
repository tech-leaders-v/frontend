import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MentorsService {

    private url = "https://my-json-server.typicode.com/Erson3536/tech-leaders-network-fake-server/mentors";

    public searchResults: any;

    constructor(private http: HttpClient) { }

    getAllMentors() {
        return this.http.get(this.url);
    }
}