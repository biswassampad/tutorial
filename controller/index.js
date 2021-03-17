exports.makename = (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    let fullname = name + ' ' + surname;
    res.json({ name: fullname });
}