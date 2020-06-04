const mongoose = require('mongoose')
const Register = mongoose.model('registrations')

module.exports = (app) => {

    app.get(`/api/register`, async (req, res) => {
        let registrations = await Register.find()
        return res.status(200).send(registrations)
    })

    app.post(`/api/register`, async (req, res) => {
        let register = await Register.create(req.body)
        return res.status(200).send({
            error: false, 
            register
        })
    })

    app.put(`api/register/:id`, async (req, res) => {
        const {id} = req.params
        let register = await Register.findByIdAndUpdate(id, req.body)
        return res.status(202).send({
            error: false,
            register
        })
    })
}