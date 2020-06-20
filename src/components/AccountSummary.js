import React from 'react'

const AccountSummary = () => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>
                    Expense
                </h4>
                <h2 className="money plus">
                    0
                </h2>
            </div>
            <div>
                <h4>
                    Income
                </h4>
                <h2 className="money minus">
                    0
                </h2>
            </div>
            
        </div>
    )
}

export default AccountSummary;