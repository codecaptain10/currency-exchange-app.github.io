/*Module with Currency Class to create currency objects*/

export class Currency {
    //Currency Types
    courseToEuro;
    courseToZloty;
    courseToDollar;
    courseToPfund;

    //Constructor
    constructor(courseToEuro, courseToZloty, courseToDollar, courseToPfund) {
        this.courseToEuro = courseToEuro;
        this.courseToZloty = courseToZloty;
        this.courseToDollar = courseToDollar;
        this.courseToPfund = courseToPfund;

    }

    //Getters
    getCourseToEuro() {
        return this.courseToEuro;
    }

    getCourseToZloty() {
        return this.courseToZloty;
    }

    getCourseToDollar() {
        return this.courseToDollar;
    }

    getCourseToPfund() {
        return this.courseToPfund;
    }

    //Setters
    setCourseToEuro(newCourse) {
        this.courseToEuro = newCourse;
    }

    setCourseToZloty(newCourse) {
        this.courseToZloty = newCourse;
    }

    setCourseToDollar(newCourse) {
        this.courseToDollar = newCourse;
    }

    setCourseToPfund(newCourse) {
        this.courseToPfund = newCourse;
    }

}