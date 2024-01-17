// STEP 1
const Cat = class NamedCat {
    constructor() {
        console.log(`The new cat has been created!`)
    }
}

const Dog = class {
    constructor() {
        console.log(`The new dog has been created!`)
    }
}

// STEP 2
const cat1 = new Cat()
const dog1 = new Dog()

// STEP 3
class Animal {
    constructor() {
        console.log(`The Animal has been created`)
    }
}

// STEP 4
class Animal {
    constructor(message) {
        console.log(message)
    }
}

// STEP 5
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type
        this.breed = breed
        this.color = color
        this.height = height
        this.length = length
    }
}

// STEP 6
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type
        this.breed = breed
        this.color = color
        this.height = height
        this.length = length
    }

    displayProperties = function() {
        for (const prop in Animal) {
            console.log(`obj.${prop} = ${obj[prop]}`);
        }  
    }     
}

// STEP 7
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type
        this.breed = breed
        this.color = color
        this.height = height
        this.length = length
        this.speak()
    }

    speak = function() {
        if (this.type == 'dog')
            console.log(`The ${this.color} dog is barking!`)
        else if (this.type == 'cat')
            console.log(`The ${this.color} cat is meowing!`)
    }     
}

// STEP 8
class Animal {
    constructor(type, breed, color, height, length) {
        this._type = type
        this._breed = breed
        this._color = color
        this._height = height
        this._length = length
        this.speak()
    }

    get type() {return this._type}
    set type(newType) {this._type = newType}
    get breed() {return this._breed}
    set breed(newBreed) {this._breed = newBreed}
    get color() {return this._color}
    set color(newColor) {this._color = newColor}
    get height() {return this._height}
    set height(newHeight) {this._height = newHeight}
    get length() {return this._length}
    set length(newLength) {this._length = newLength}

    checkType = function() {
        if (this.type == 'dog')
            return 'dog'
        else 
        return 'cat'
    }     

    speak = function() {
        console.log(`The ${checkType()} has made a noise!`)
    }     
}

// STEP 9
String.prototype.findWords = function(paragraph, word) {
    let wordCount = paragraph.split(word).length - 1
    alert(`The number of time that word was found in the paragraph: ${wordCount}`)
}
    