// ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password} : abcd`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('chai', 'chai@mail.com', '123')
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// UNDER THE HOOD
function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password} : abcd`
}
User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User('tea', 'tea@mail.com', '78600')
console.log(tea.encryptPassword());
console.log(tea.changeUsername());