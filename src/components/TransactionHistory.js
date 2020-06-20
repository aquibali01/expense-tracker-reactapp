import React from 'react'

const TransactionHistory = () => {
    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                <li className="plus">
                    Income project 1 
                    <span>
                        1000
                    </span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    Expense project 1
                    <span>
                        -500
                    </span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}

export default TransactionHistory;