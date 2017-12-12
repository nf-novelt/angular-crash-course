
export class CoursesService {
    getCourses() {
        //Place here the logic to init an HTTP request to get the courses
        //return ["course1", "course2", "course2"];
        return [
            { id: 1, name:"Course 1"},
            { id: 2, name:"Course 2"},
            { id: 3, name:"Course 3"}
        ];
    }
}