/**
 * Javascript Objects
 */

let developer = {
    name: "John Doe",
    alias: "johndoe",
    level: "Senior",
    age: 30,
    active: true,
};

developer.name = "Jane Smith";
developer.rank = "Lead Developer";

/**
 * Accessing object properties
 */
console.log(developer["name"]);
console.log(developer["alias"]);
console.log(developer["level"]);
console.log(developer["age"]);
console.log(developer["active"]);

/**
 * objects and arrays together
 */

let project = {
    name: "COSMOS",
    description: "A space exploration game",
    technologies: ["JavaScript", "HTML5", "CSS3"],
}
console.log(project["name"]);
console.log(project["description"]);
console.log(project["technologies"][2]);

/**
 * Challenge 2
 */

let system = {
    security: "Basic"
};

system.security = "Advanced";
system.version = 2;

console.log(system.security);
console.log(system.version);

/**
 * Object in an object(Nested Object)
 */

let user = {
    name: "Quinn",
    account: {
        username: "quinn01",
        level: 5
    }
};

/**
 * Updating nested object properties
 */
user.account.level = 6;
console.log(user.account.level);

/**
 * accessing nested object properties
 */
console.log(user.account.username);
console.log(user.account.level);

/**
 * Arrays in an object
 */
// The earlier `developer` object is still in this scope, so use a distinct name
// here; redeclaring it with `let` caused the browser's "already been declared" error.
let developers = [
    {
        name: "John Doe",
        level: 5,
    },
    {
        name: "Alex",
        level: 8,
    },
    {
        name: "Jane",
        level: 10,
    }
];

/**
 * Adding a new object
 */
developers.push({
    name: "Samuel",
    level: 12
});

/**
 * Modifying objects inside arrays
 */
developers[1].level = 9;
console.log(developers[1].level);

console.log(developers[0].name);
console.log(developers[1].level);
console.log(developers[2].name);
console.log(developers[3].name);

/**
 * Boss fight 012
 * Challenge 1
 */
let soldiers = [
    {
        name: "Knight", power: 50
    },
    {
        name: "Mage", power: 80
    },
    {
        name: "Archer", power: 65
    }
];
console.log(soldiers[1].name);

/**
 * Challenge 2
 */
let players = [
    {
        name: "Alex", level: 4
    },
    {
        name: "John", level: 7
    }
];
players[0].level = 9;
console.log(players[0].level);

/**
 * Challenge 3
 */
let team = [
    {name: "Alpha", role: "Developer"}
];

team.push({name: "Beta", role: "Designer"});
console.log(team.length);

/**
 * Using a FOR LOOP with an array
 */
let army =["Knight", "Mage", "Archer"];
for (let i = 0; i < army.length; i++){
    console.log( army[i]);
}

/**
 * Looping through an array of objects
 */
let devs = [
    {name: "Quinn", level: 5},
    {name: "Kaine", level: 8},
    {name: "Kealor", level: 3}
];
for (let i = 0; i < devs.length; i++){
    console.log(devs[i].name);
    console.log(devs[i].level);
}

/**
 * Boss fight 013
 * Challenge 1
 */
let units = ["Knight", "Mage", "Archer"];
for (let i = 0; i < units.length; i++){
    console.log(units[1]);
}

/**
 * challenge 2
 */
let dev = [
    {name: "Alex", level: 4},
    {name: "John", level: 7}
];
for (let i = 0; i < dev.length; i++){
    console.log(dev[i].level);
}

/**
 * Challenge 3
 */
let agents = [
    {name: "ORION", status: "Active"},
    {name: "NOVA", status: "Offline"},
    {name: "ARES", status: "Active"}
];
for (let i = 0; i < agents.length; i++){
    console.log(agents[i].name);
}