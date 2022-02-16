import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'

@Injectable()
export class MarcadorService {

   constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            console.log(data);
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("files/marcador1.json");
    }
}
