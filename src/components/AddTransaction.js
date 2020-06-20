import React from 'react'

const AddTransaction = () => {
    return (
        <div>
            <h3>
                Add Transaction
            </h3>
            <div>
                <form >
                    <div className="form-control">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" placeholder="Type text here"></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input type="text" id="amount" placeholder="Type amount here"></input>
                    </div>
                </form>
                <button className="btn">Add Transaction</button>
            </div>

        </div>
    )
}

export default AddTransaction;