const db = require('../config/connectionDB')
const bcrypt = require('bcrypt')

const getAll = (req, res) => {
    db.query('SELECT * FROM monitors', (error, results) => {
        if (error) {
            console.log("error when obtaining monitor.", error)
            res.status(500).json({ status: 'Error', message: "Error al consultar la información." })
        }

        res.status(200).json(results)

    })
}

const add = async (req, res) => {
    const { names, last_names, academy_program, semester, dni, email, phone, user, password } = req.body
    const salt = await bcrypt.genSalt(10);
    const passwordEncrypted = await bcrypt.hash(password, salt);
    db.query(
        'INSERT INTO monitors (names, last_names, academy_program, semester, dni, email, phone, user, password) VALUES (?,?,?,?,?,?,?,?,?)',
        [names, last_names, academy_program, semester, dni, email, phone, user, passwordEncrypted],
        (error, results) => {
            if (error) {
                console.log("error when saving monitor.", error)
                res.status(500).json({ status: 'Error', message: "Error al guardar el monitor." })
            }

            res.status(200).json({ status: 'OK', message: "Monitor guardado correctamente." })

        }
    )
}
const update = (req, res) => {
    const { id } = req.params
    const { names, last_names, academy_program, semester, dni, email, phone } = req.body
    db.query(
        `UPDATE monitors SET names = ?, last_names = ?, academy_program = ?, semester = ?, dni = ?, email = ?, phone = ? WHERE id = ?`,
        [names, last_names, academy_program, semester, dni, email, phone, id],
        (error, results) => {
            if (error) {
                console.log("error when updating monitor.", error)
                res.status(500).json({ status: 'Error', message: "Error al actualizar el monitor." })
            }

            res.status(200).json({ status: 'OK', message: "Monitor actualizado correctamente." })

        }
    )
}

const remove = (req, res) => {
    const { id } = req.params
    db.query(
        'DELETE FROM monitors WHERE id = ?',
        [id],
        (error, results) => {
            if (error) {
                console.log("error when removing monitor.", error)
                res.status(500).json({ status: 'Error', message: "Error al eliminar el monitor." })
            }

            res.status(200).json({ status: 'OK', message: "Monitor eliminado correctamente." })

        }
    )
}

module.exports = { getAll, add, update, remove }