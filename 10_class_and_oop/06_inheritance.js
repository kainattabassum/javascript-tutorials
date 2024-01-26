class User {
    constructor(username, password) {
        this.username = username
        this.password = password
    }

    loggin() {
        console.log(`${this.username} logged in!`);
    }
}

class Teacher extends User {
    constructor(username, password, email) {
        super(username, password)
        this.email = email
    }

    addCourse() {
        console.log(`new course added by ${this.username}`); 
    }
}

const chai = new Teacher('chai', '879', 'chai@teacher.com')
chai.addCourse()
chai.loggin()

const masalaChai = new User("masalaChai")
masalaChai.loggin()