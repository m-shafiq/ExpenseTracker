import { createContext } from 'react';
import transactionReducer from '../context/transReducer';

const initialTransactions=[
    {amount: 500, desc: "Added Cash"},
    {amount: -100, desc: "More Cash"},
    {amount: -200, desc: "Books"}
]

export const transactionContext=createContext(initialTransactions);
