const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const { getInvestments, addInvestment, deleteInvestment } = require('../controllers/investment');

const router = require('express').Router();


router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
    .get('/get-investment', getInvestments)
    .post('/add-investment', addInvestment)
    .delete('/delete-investment/:id', deleteInvestment)

module.exports = router