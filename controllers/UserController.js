const UserModel = require('../models/UserModel')

module.exports = {
    create: (req, res) => {
        let user = new UserModel({
            forename: req.body.forename,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            team: req.body.team
        })

        user.save()
            .then(result => {
                res.json({succes: true, result: result })
            })
            .catch(err => {
                res.json({ succes: false, result: err })
            })
    },

    update: (req, res) => {
        UserModel.update({ _id: req.body._id }, req.body)
            .then(user => {
                if (!user) res.json({ succes: false, result: `User does not exist` })
                res.json(user)
            })
            .catch(err => {
                res.json({ succes: false, result: err })
            })
    },

    retrieve: (req, res) => {
        UserModel.find()
            .then(result => {
                if (!result) res.json({ succes: false, result: `No result found` })
                res.json({ succes: true, result: result})
            })
            .catch(err => res.json({ succes: false, result: err }))
    },

    delete: (req, res) => {
        UserModel.remove({ _id: req.body.id })
            .then(result => {
                if (!result) res.json({ succes: false, result: `No user was found with the ID` })
                res.json({ succes: true, result: result })
            })
            .catch(err => res.json({ succes: false, result: err }))
    }
}
