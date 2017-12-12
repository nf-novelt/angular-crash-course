import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component(
    {
        selector: 'courses',
        templateUrl: './courses.component.html',
        styleUrls: ['./courses.component.css']
    }
)
export class CoursesComponent {
    title = "List of courses";
    courses: {id: number, name: string}[] = [];
    coursesService: CoursesService;
    imageUrl = "https://s-media-cache-ak0.pinimg.com/originals/4e/b1/96/4eb1965fe984f62e8f7734ff140f0604.jpg";
    imageUrl2 = "https://images.adsttc.com/media/images/593f/dce6/e58e/ce96/bd00/0496/large_jpg/Singapore_Skyline_at_Night_with_Blue_Sky.jpg?1497357533";

    constructor(service: CoursesService) {
        this.coursesService = service;
        this.onLoadCourses();
    }

    onAddCourse(newCourse: string) {
        this.courses.push({id: 999, name: newCourse});
    }

    onRemoveCourse(course) {
        let index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    }

    onChangeCourse(course) {
        course.name = "UPDATED";
    }

    onLoadCourses() {
        this.courses = this.coursesService.getCourses();
    }

    trackCourse(index, course) {
        return course? course.id : undefined;
    }
    
}