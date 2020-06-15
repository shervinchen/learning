import AV, { Query, User } from "leancloud-storage";

AV.init({
  appId: "Lz7k0rDEQz6FWmUHuJfi2vuK-gzGzoHsz",
  appKey: "mG1llpq1Aj0gD6uJFR2gxWeO",
  serverURL: "https://lz7k0rde.lc-cn-n1-shared.com",
});

const Auth = {
  register(username, password) {
    let user = new User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((resolve, reject) => {
      user.signUp().then(
        (loginedUser) => resolve(loginedUser),
        (error) => reject(error)
      );
    });
  },

  login(username, password) {
    console.log("------");
    console.log(username, password);
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then(
        (loginedUser) => resolve(loginedUser),
        (error) => reject(error)
      );
    });
  },

  logout() {
    User.logOut();
  },

  getCurrentUser() {
    return User.current();
  },
};

const Uploader = {
  add(file, filename) {
    const item = new AV.Object('Image')
    const avFile = new AV.File(filename, file)
    item.set('filename', filename)
    item.set('owner', AV.User.current())
    item.set('url', avFile)
    return new Promise((resolve, reject) => {
      item.save().then((serverFile) => {
        resolve(serverFile)
      }, error => {
        reject(error)
      })
    })
  }
}

export { Auth, Uploader };
