function parseJSONobjs(arr) {
    let studentData = arr.map(student => JSON.parse(student));

    studentData.forEach(s => {
        console.log(`Name: ${s.name}`);
        console.log(`Age: ${s.age}`);
        console.log(`Date: ${s.date}`)
    });
}

