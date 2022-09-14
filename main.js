let names = [];
let people = [];

function registration() {
  let user_name = prompt("Enter your username:");
  if (names.includes(user_name)) {
    alert("Пользователь с таким именем существует");
  }
  let user_password = prompt("Enter your password:");
  let user_confirm = prompt("Confirm your password:");

  if (user_password != user_confirm) {
    alert("Пароли не совпадают");
  }

  let user_age = prompt("Enter your age:");
  person = {
    name: user_name,
    password: user_password,
    confirm: user_confirm,
    age: user_age,
    isLogin: false,
  };
  if (names.includes(user_name) || user_password != user_confirm) {
    alert("registration failed");
  } else {
    names.push(user_name);
    people.push(person);
  }
}

function login() {
  let name = prompt("Enter your username:");
  let password = prompt("Enter your password:");
  for (i in people) {
    if (name == people[i].name) {
      if (password == people[i].password) {
        people[i].isLogin = true;
        document.getElementById(
          "greetings"
        ).innerHTML = `Кош келиңиз, ${name}!`;
      } else {
        alert("invalid username or password");
      }
    }
  }
}

function editAccount() {
  for (i in people) {
    if (people[i].isLogin == true) {
      let key = prompt("What do you want to change?");
      let value = prompt("Enter changes:");
      if (key == "name") {
        names[i] = value;
        people[i].name = value;
        document.getElementById(
          "greetings"
        ).innerHTML = `Кош келиңиз, ${value}!`;
        break;
      } else if (key == "age") {
        people[i].age = value;
        break;
      } else if (key == "password") {
        let confirm = prompt("Enter your old password:");
        if (confirm == people[i].password) {
          people[i].password = value;
          people[i].confirm = value;
          break;
        } else {
          alert("incorrect password");
        }
      }
    }
  }
}

function exit() {
  for (i of people) {
    if (i.isLogin == true) {
      i.isLogin = false;
      document.getElementById("greetings").innerHTML = " ";
    }
  }
}

function deleteAccount() {
  for (i in people) {
    if (people[i].isLogin == true) {
      let confirmDelete = prompt("Enter your password to delete your account:");
      if (confirmDelete == people[i].password) {
        people.splice(i, 1);
        names.splice(i, 1);
        document.getElementById("greetings").innerHTML = " ";
      } else {
        alert("incorrect password");
      }
    } else {
      alert("Error");
    }
  }
}
