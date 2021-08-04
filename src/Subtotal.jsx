import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from "react-router-dom";
import './Subtotal.css'

const Subtotal = () => {
    const history = useHistory();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of the homework */}
                            Subtotal (0 items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={2500} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;