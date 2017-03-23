function extractCapitalCaseWords(arr) {
    let text = arr.join(' ');
    let capitals = text.split(/\W+/).filter(w => w.length > 0).filter(w => w === w.toUpperCase());

    console.log(capitals.join(', '));
}

let input = [
    'We start by HTML, CSS, JavaScript, JSON and REST.',
    'Later we touch some PHP, MySQL and SQL.',
    'Later we play with C#, EF, SQL Server and ASP.NET MVC.',
    'Finally, we touch some Java, Hibernate and Spring.MVC.'
];
extractCapitalCaseWords(input);