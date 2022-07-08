import {Component, OnInit} from '@angular/core';
import {Student} from './student.model';
import {StudentService} from "./student.service";

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']

})
export class AdministracionComponent implements OnInit {
  static URL = 'administracion';
  student: Student;

  constructor(private studentService: StudentService) {

  }

  ngOnInit() {
  }

}
