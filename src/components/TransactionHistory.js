import React, { useContext } from 'react';

import { transactionContext } from '../context/transactionContext';

export const TransactionHistory = () => {
    let trans = useContext(transactionContext);
    // let transactions = [
    //     { amount: 500, desc: "Added Cash" },
    //     { amount: 100, desc: "More Cash" },
    //     { amount: -200, desc: "Books" }
    // ]
    console.log(trans);
    return (
        <div>
            <h3> Transaction History</h3>

            <ul className="list">
                {trans.map((transObj, ind) => {
                    return (<li className={transObj.amount < 0 ? "minus" : "plus"} key={ind}>
                        <span>{transObj.desc} </span>
                        <span>{transObj.amount} </span>
                        <button className="delete-btn"></button>
                    </li>)
                })}
                {/* <li className="plus">
                    Salary income
                    <span>$1000.0</span>
                   

                </li>
                <li className="minus">
                    Rent
                    <span>$20.0</span>
                    <button className="delete-btn"></button>

                </li> */}
            </ul>
        </div>
    );
};

