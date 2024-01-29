const User = {
    _email: 'chai@email.com',
    _password: "abcd",

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea); // {}
console.log(tea.email); // CHAI@EMAIL.COM
console.log(tea._password); // abcd