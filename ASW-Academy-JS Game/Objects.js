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