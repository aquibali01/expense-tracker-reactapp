import React, { useState } from 'react';

const AddTransaction = () => {

    const [description, setDescription] = useState();
    const [tranaction, setTransaction] = useState(); 

    return (
        <div>
            <h3>
                Add Transaction
            </h3>
            <div>
                <form >
                    <div className="form-control">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" placeholder="Type text here" value = {description} onChange = {(e) => setDescription(e.target.value)}></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input type="text" id="amount" placeholder="Type amount here" valUE={tranaction} onChange = {(e) => setTransaction(e.target.value)}></input>
                    </div>
                </form>
                <button className="btn">Add Transaction</button>
            </div>

        </div>
    )
}

export default AddTransaction;