import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Web Development Course','description':'web development on;ine course from internshala','image':'../../assets/img/book111.png'},
    {'id':2,'name':'Java Summer Internship ','description':'Core Java Training, United Institute of Technology','image':'../../assets/img/book111.png'},
    {'id':3,'name':'Machine Learning','description':'Machine Learning with Python Training workshop by KYRION technologies at IIT BHU Varanasi','image':'../../assets/img/book111.png'},
    {'id':4,'name':'SoftSkill and personality Development ','description':'NPTEL Online Certification for Enhancing SoftSkills and personality','image':'../../assets/img/book111.png'},
  ]
}