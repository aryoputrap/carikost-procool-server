const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.user

exports.login = (req, res) => {
  //check if email and pass match in db tbl user
  const username = req.body.username
  const password = req.body.password //use encryption in real world case!

  User.findOne({ where: { username, password } }).then(user => {
    if (user) {
      const token = jwt.sign({ userId: user.id }, 'kepobanget')
      res.send({
        token
      })
    } else {
      res.send({
        error: true,
        message: "Wrong Username or Password!"
      })
    }
  })


}