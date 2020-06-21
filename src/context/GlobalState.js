import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    transactions : []
}

//create context

export const GlobalContext = createContext(initialState);

// provider component

export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}

        </GlobalContext.Provider>
    )
}


// import React, { createContext, useReducer } from 'react';
// import AppReducer from './AppReducer';

// // Initial state
// const initialState = {
//   transactions: [
//     {id: "1", text : "salary", amount: 2000},
//             {id: "2", text : "grocery", amount: -200},
//             {id: "3", text : "dividends", amount: 1000},
//             {id: "4", text : "bills", amount: -100}
//   ]
// }

// // Create context
// export const GlobalContext = createContext(initialState);

// // Provider component
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   // Actions
//   function deleteTransaction(id) {
//     dispatch({
//       type: 'DELETE_TRANSACTION',
//       payload: id
//     });
//   }

//   function addTransaction(transaction) {
//     dispatch({
//       type: 'ADD_TRANSACTION',
//       payload: transaction
//     });
//   }

//   return (<GlobalContext.Provider value={{
//     transactions: state.transactions,
//     deleteTransaction,
//     addTransaction
//   }}>
//     {children}
//   </GlobalContext.Provider>);
// }


