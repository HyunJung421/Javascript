// Callback Hell example
// Callback to Promise
// Callback to Async
class UserStorage {
    async loginUser(id, password) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                return id;
            } else {
                throw 'not found';
            }
        }, 2000);
    }

    async getRoles(user) {
        setTimeout(() => {
            if (user === 'ellie') {
                return {name: 'ellie', role: 'admin'};
            } else {
                throw 'no access';
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log)
