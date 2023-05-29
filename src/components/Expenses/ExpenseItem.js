import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem=(props)=> {

  const [title, setTitle] = useState(props.title)
  const [dateExpenseTitle, setDateExpenseTitle] = useState(props.date)

  const clickHandler=()=>{
    setTitle("Updated!")
    console.info("Just updated component to: " + title)
  }

  const amountChangeHandler = () => {
    setDateExpenseTitle ("Date updated")
    console.info("Just updated date component to: ", dateExpenseTitle)
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={amountChangeHandler}>Change Date</button>
    </Card>
  )
}

export default ExpenseItem