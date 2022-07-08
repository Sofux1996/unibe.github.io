import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpService } from '../core/http.service';
import { Student} from "./student.model";

@Injectable()
export class StudentService {
  static END_POINT = 'students';

  constructor(private httpService: HttpService) {
  }


  create(provider: Student): Observable<Student> {
    return this.httpService.post(StudentService.END_POINT, provider);
  }

}
