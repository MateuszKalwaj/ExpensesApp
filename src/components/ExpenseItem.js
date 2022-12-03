import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>December 4th 2022</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$290.49</div>
            </div>
        </div>
    )
}

export default ExpenseItem 