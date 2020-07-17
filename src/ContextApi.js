// import React, { createContext, useReducer } from 'react';
// import Shoes from './Shoes.json';
// import AppReducer from './Reducer';


// const initialState = { Shoes };

// export const Context = createContext(initialState);

// export const ContextProvider = ({ Children }) => {
//     const [state, dispatch] = useReducer(AppReducer, initialState);

//     function DeleteTransaction(id) {
//         dispatch({
//             type: 'DELETE_TRANSACTION',
//             payload: id
//         });
//     }

//     function AddTransaction(item) {
//         dispatch({
//             type: 'ADD_TRANSACTION',
//             payload: item
//         });
//     }

//     return (
//         <Context.Provider
//             value={{
//                 transactions: state.initialState,
//                 AddTransaction,
//                 DeleteTransaction
//             }}>
//             {Children}
//         </Context.Provider>
//     );
// }

// export default ContextProvider;