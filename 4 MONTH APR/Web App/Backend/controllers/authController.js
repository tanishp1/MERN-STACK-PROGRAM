

const login = async (req, res) => {
    try {

        res.status(201).json({
            message: "Login Successfully"
        })

    } catch (error) {
        console.log(error)
    }
}

const register = async (req, res) => {
    try {

        res.status(201).json({
            message: "Register Account successfully"
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports = { login, register }