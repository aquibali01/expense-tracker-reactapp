import React, { useContext } from 'react';

import {GlobalContext} from "../context/GlobalState";

import { Tranaction } from "./Tranaction"; 

const TransactionHistory = () => {

    const {transactions} = useContext(GlobalContext);

    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                {transactions.map(transaction =>( <Tranaction key={transaction.id} transaction= {transaction}/> ))}
              
            </ul>
        </div>
    )
}

export default TransactionHistory;