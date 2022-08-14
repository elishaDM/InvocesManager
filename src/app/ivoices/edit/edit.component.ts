import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  //editForm: UntypedFormGroup;

  constructor() { }// private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
   // this.editForm = this.formBuilder.group({
   //   editAmount: [''],// [Validators.required]],
   // });
  }

}
