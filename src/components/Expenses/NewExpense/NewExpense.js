import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        console.log(enteredExpenseData.date)
        const expenseData = {
            ...enteredExpenseData,
            amount: +enteredExpenseData.amount,
            id: enteredExpenseData.title
        }
        console.log("ExpenseData from NewExpense: ", expenseData)
        props.onAddExpense(expenseData);
    }

    return (
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            </div>
    );
};

export default NewExpense;