// Objesct constructor
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Huu', 'Phuoc', 'Avatar');
var user = new User('TF', 'HuuPhuoc', 'Avatar');

author.title = 'abc';
user.comment = 'abc';
console.log(author);
console.log(user);