import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add Transaction</h3>
            <form> 
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text"  placeholder="Enter Description"></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number"  placeholder="Enter Amount"></input>
                </div>

                <button className="btn"> Add Transaction</button>

            </form>
            
        </div>
    )
}
