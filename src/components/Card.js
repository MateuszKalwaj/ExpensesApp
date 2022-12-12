
function Card(props) {
    return (
        <div className="expense-item">
        {props.children} 
        </div>
    )
}
export default Card;