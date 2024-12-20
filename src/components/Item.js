import PropTypes, { number, string } from 'prop-types'; // ES6

const Item = (props) => {
    const {title,amount} = props
    return (
        <li>{title}<span>{amount}</span></li>
         
    );
}

Item.prototype={
        title:PropTypes.string.isRequired,
        amount:PropTypes.number.isRequired
}

export default Item;