

const Iteams = require ('./../models/iteamsModels')


const addIteam = async () => {
    try {

        const { name, decription, sellingPrice, purchasePrice, quantity, unit } = req.body

        const saveIteam = new Iteams({
            name,
            decription,
            sellingPrice,
            purchasePrice,
            quantity,
            unit
        })

        await saveIteam.save()

        res.status(201).json({
            message: "Iteam Created",
            data: saveIteam
        })

        
    } catch (error) {
        console.log(error)
    }
}

const getAllIteam = async () => {
    try {
         const iteams = await iteams.find()

        res.status(200).json({
            message: "Get All Iteam List",
            data: iteams
        })
    } catch (error) {
        console.log(error)
    }

}

const deleteIteam = async () => {
    try {
        
        const { id } = req.params

        const deleteIteam = await Iteam.findByIdAndDelete(id)

        res.status(200).json({
            message: "Iteam Deleted",
            deleteIteam: deleteIteam
        })

    } catch (error) {
        console.log(error)
    }

}

const editIteam = async () => {
    try {

    } catch (error) {
        console.log(error)
    }

}

module.exports = { addIteam , getAllIteam , deleteIteam , editIteam }

