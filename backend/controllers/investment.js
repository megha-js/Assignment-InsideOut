const InvestmentSchema = require('../models/InvestmentModel');

exports.addInvestment = async (req, res) => {
    const { title, amount, description, date } = req.body
    console.log(req.body)
    const investment = InvestmentSchema({
        title, amount, description, date
    })
    console.log(investment)
    try {
        if (!title || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' })
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number!' })
        }
        console.log(investment)
        await investment.save()

        res.status(200).json({ message: 'Investment Added' })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.getInvestments = async (req, res) => {
    try {
        const investment = await InvestmentSchema.find().sort({ createdAt: -1 })
        return res.status(200).json(investment)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}
exports.deleteInvestment = async (req, res) => {
    const { id } = req.params;
    InvestmentSchema.findByIdAndDelete(id)
        .then((investment) => {
            res.status(200).json({ message: 'Investment Deleted' })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Server Error' })
        })

}
