
class Person
{
    name       : string;
    lastName   : string;
    dni        : number;
    age        : number;

    constructor( name: string, lastName: string, dni: number, age: number )
    {
        this.name      = name;
        this.lastName  = lastName;
        this.dni       = dni;
        this.age       = age;
    }
    ToString() : string
    {
        return `Name: ${this.name}\nLastName: ${this.lastName}\nDni: ${this.dni}\nAge: ${this.age}\n`
    }
}
class Teacher extends Person
{
    
    turn        : Turn;

    constructor(name: string, lastName: string, dni: number, age: number, turn: Turn)
    {
        super(name, lastName, dni, age);
        this.turn = turn;
    }

}
class Student extends Person
{
    course    : Course;

    constructor(name: string, lastName: string, dni: number, age: number, course: Course)
    {
        super(name, lastName, dni, age);
        this.course     = course;
    }

    
    ToString()
    {
        return `${super.ToString()}\nCourse: ${this.course}`;
    }
}
class University
{
    name: string;
    students: Array<Student>;
    teacher: Teacher;
    classroom: string;
    course: Course;

    constructor(name: string, teacher: Teacher, classroom: string, course: Course)
    {
        this.name = name;
        this.students = new Array<Student>();
        this.teacher = teacher;
        this.classroom = classroom;
        this.course = course;
    }

    AddStudent(s: Student) : boolean
    {
        let rtn: boolean = false;
        if(s !== null)
        {
            if( !(this.StudentExist(s, this.students)) && s.course === this.course)
            {
                this.students.push(s);
                rtn = true;
            }
        }
        return rtn;
    }

    RemoveStudent(s: Student) : boolean
    {
        let rtn: boolean = false;
        if(s !== null)
        {
            if( this.StudentExist(s, this.students) )
            {
                let i = this.students.indexOf(s);
                this.students.splice(i, i);
                rtn = true;
            }
        }
        return rtn;
    }

    StudentExist(student: Student, aStudents: Array<Student>)
    {
        let rtn: boolean = false;

        if(aStudents.length > 0){
            for(let s of aStudents)
            {
                if(student.dni === s.dni)
                {
                    rtn = true;
                    break;
                }
            }
        }

        return rtn;
    }
    ToString()
    {
        console.log(`# University (${this.name}) #\nTeacher: ${this.teacher.name} ${this.teacher.lastName}\nCouse: ${this.course}\nStudents:\n`)
        for(let student of this.students)
        {
            console.log(student.ToString());
        }
    }
}
enum Course
{
    CSharp      = 0,
    Typescript  = 1,
    Angular     = 2
}
enum Turn
{
    Morning      = 0,
    Afternoon    = 1,
    Night        = 2,
}





function Ejecute(){
    //Creation object
    let student1 = new Student('Ezequiel', 'Bamio', 43388576, 20, Course.Angular);
    let student2 = new Student('Leandro', 'Sarey', 38775521, 24, Course.CSharp);
    let student3 = new Student('Rocio', 'Samuel', 32015478, 21, Course.Angular);
    let teacher = new Teacher('Federico', 'Lastem', 2245875, 38, Turn.Night);
    const university = new University('UTN', teacher, '3A', Course.Angular);
    //Add student to university (student2 will not be added)
    university.AddStudent(student1);
    university.AddStudent(student2);
    university.AddStudent(student3);
    //Show university
    university.ToString();
    console.log('-----------------------------------');
    //New student
    let student4 = new Student('Sofia', 'Perez', 38754123, 22, Course.Angular);
    university.AddStudent(student4);
    //Show university
    university.ToString();
    console.log('-----------------------------------');
    //Delete student
    university.RemoveStudent(student4);
    //Show university
    university.ToString();
}

this.Ejecute();

