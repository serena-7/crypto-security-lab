const bcrypt = require('bcryptjs');
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcrypt.compareSync(password, users[i].passwordHash)) {
          const existingUser = {...users[i]};
          delete existingUser.passwordHash;
          return res.status(200).send(existingUser);
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        const {username, email, firstName, lastName, password} = req.body;
        const salt = bcrypt.genSaltSync(6);
        const passwordHash = bcrypt.hashSync(password,salt);

        const user = {
          username,
          email,
          firstName,
          lastName,
          passwordHash
        }

        users.push(user);
        console.log(user);
        // users.push(req.body)
        res.status(200).send(user);
    }
}