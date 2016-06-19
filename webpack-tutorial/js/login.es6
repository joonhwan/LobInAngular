console.log('login from login.es6');

let login = (username, password) => {
  if(username !== 'admin') {
    console.log('incorrect username');
  }
};

login('admin2', 'iduuno');
