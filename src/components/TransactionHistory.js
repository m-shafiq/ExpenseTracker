import React from 'react';



export const TransactionHistory = () => {
    return (
        <div>
            <h3> Transaction History</h3>

            <ul className="list">
                <li className="plus">
                    Salary income
                    <span>$1000.0</span>
                    <button className="delete-btn"></button>

                </li>
                <li className="minus">
                    Rent
                    <span>$20.0</span>
                    <button className="delete-btn"></button>

                </li>
            </ul>
        </div>
    );
};

