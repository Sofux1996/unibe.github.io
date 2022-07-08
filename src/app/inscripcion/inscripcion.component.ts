import {Component, OnInit} from '@angular/core';
import {Student} from "../administracion/student.model";
import {StudentService} from "../administracion/student.service";

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {
  static URL = 'inscripcion';
  student: Student

  constructor(private studentService: StudentService) {
    this.student = {
      id: '', name: '', address: '', phonenumber: '', email: '',
      tipodeidentificacion: '', estadocivil: '', identificacionEtnica: '',
      sector: '', cargo: '', puesto: '', status: false, birthdate: ''
    };
  }

  ngOnInit() {
  }

  save() {
    console.log(this.student);
    this.studentService.create(this.student).subscribe();
  }

}
