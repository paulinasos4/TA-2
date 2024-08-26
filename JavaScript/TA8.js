function findTheOldest(people) {
    const añoactual = new Date().getFullYear();
    let personamayor = null;
    for (const person of people) {
        const deathYear = person.yearOfDeath || añoactual;
        const age = deathYear - person.yearOfBirth;
        if (!personamayor || age > (personamayor.age || 0)) {
            personamayor = {
                name: person.name,
                age: age
            };
        }
    }
    console.log('La persona más vieja es:', personamayor.name, 'con', personamayor.age, 'años');
}
const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

findTheOldest(people);
