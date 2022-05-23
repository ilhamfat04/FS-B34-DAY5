const { user } = require('../../models')

exports.addUser = async (req, res) => {
    try {

        await user.create(req.body)

        res.send({
            status: 'success',
            message: 'Add user finished'
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.getUsers = async (req, res) => {
    // code here
    try {
        const users = await user.findAll({
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt']
            }
        })

        // `SELECT name,email, status, id FROM`
        res.send({
            status: "success",
            data: {
                users
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }

}

exports.getUser = async (req, res) => {
    // code here
    try {

        // return console.log(req.params);
        const { id } = req.params
        // const id = req.params.id

        const data = await user.findOne({
            where: {
                status: "user"
            },
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt']
            }
        })

        res.send({
            status: "success",
            data: {
                data
            }
        })

    } catch (error) {
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}