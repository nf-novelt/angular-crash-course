import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component(
    {
        selector: 'courses',
        template: `
            <h2>{{ title }}</h2>
            <img src="{{ imageUrl }}" width="200px" height="112px" />
            <img [src]="imageUrl2" width="200px" height="112px" />
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>
        `
    }
)
export class CoursesComponent {
    title = "List of courses";
    courses;
    imageUrl = "https://s-media-cache-ak0.pinimg.com/originals/4e/b1/96/4eb1965fe984f62e8f7734ff140f0604.jpg";
    imageUrl2 = "https://images.adsttc.com/media/images/593f/dce6/e58e/ce96/bd00/0496/large_jpg/Singapore_Skyline_at_Night_with_Blue_Sky.jpg?1497357533";

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}