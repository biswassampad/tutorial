const { validationResult } = require('express-validator');
const _this = this;
exports.makename = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            status: 1,
            msg: "Incomplete request payload",
            errors: errors.array()
        })
    }
    const name = req.body.name;
    const surname = req.body.surname;
    const fullname = name + ' ' + surname;
    const age = req.body.age;

    await _this.validation(age)
        .then((eligibility) => {
            res.json({ name: fullname, status: eligibility })
        })
        .catch((error) => {
            res.json({ name: fullname, error: error })
        })
}

exports.validation = async(age) => {
    return new Promise((resolve, reject) => {
        if (age > 18) {
            resolve('Eligible')
        } else {
            reject('Not Eligible')
        }
    })
}