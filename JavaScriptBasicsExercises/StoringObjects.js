function saveStudent(arr) {
    let students = [];

    for (let i = 0; i < arr.length; i++) {
        let args = arr[i].split(" -> ");
        let name = args[0];
        let age = args[1];
        let grade = args[2];

        let currentStudent = {
            name: name,
            age: age,
            grade: grade
        };
        students.push(currentStudent);
    }

    for (let i = 0; i < students.length; i++) {

        console.log(`Name: ${students[i].name}`);
        console.log(`Age: ${students[i].age}`);
        console.log(`Grade: ${students[i].grade}`);
    }
}

