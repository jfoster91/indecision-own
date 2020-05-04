// Think of classes like blueprints

class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi, I am ${ this.name }.`
    }

    getDescription() {
        return `${ this.name } is ${ this.age } years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)             // calls the parent constructor function
        this.major = major
    }

    hasMajor() {
        return !!this.major
    }

    getDescription() {   
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` Their major is ${ this.major }.`
        }
        return description
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    getGreeting() {
        let greeting = super.getGreeting()

        if (this.homeLocation) {
            greeting += ` He is in ${ this.homeLocation }`
        }
        return greeting
    }
}


const me = new Traveller("Jonathan Foster", 27)
console.log(me.getGreeting())

const other = new Student()
console.log(other.getDescription())