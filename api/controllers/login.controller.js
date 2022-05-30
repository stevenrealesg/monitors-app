const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require('../config/connectionDB')

exports.login = async (req, res) => {
    const { user, password } = req.body
    db.query('SELECT * FROM monitors WHERE user = ?', [user], async (error, results) => {
        if (error) {
            console.log("error when obtaining user.", error)
            res.status(500).json({ status: 'Error', message: "Error el usuario." })
        }

        const monitor = results[0]

        const passwordCorrect = !monitor
            ? false
            : await bcrypt.compare(password, monitor.password)

        if (!(monitor && passwordCorrect)) {
            res.status(401).json({ message: "invalid user o password" })
        } else {
            const token = jwt.sign({
                id: 3,
                names: monitor.names,
                last_names: monitor.last_names,
                academy_program: monitor.academy_program,
                semester: monitor.semester,
                dni: monitor.dni,
                email: monitor.email,
                phone: monitor.phone,
                user: monitor.user,
            }, process.env.SECRET_WORD)


            res.status(200).json({
                names: monitor.names,
                last_names: monitor.last_names,
                academy_program: monitor.academy_program,
                semester: monitor.semester,
                dni: monitor.dni,
                email: monitor.email,
                phone: monitor.phone,
                user: monitor.user,
                token
            })
        }

    })
}