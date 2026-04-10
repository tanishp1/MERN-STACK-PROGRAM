

const getDashboardCount = async (req, res) => {
    try {

        res.status(200).json({
            message: "get dashboard data successfully"
        })
        
    } catch (error) {
        console.log(error)

    }
}

module.exports = { getDashboardCount }