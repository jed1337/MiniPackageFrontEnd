import React from 'react';

function Pickup() {
    return (
        <div>
            <h1>Book a pickup</h1>
            <div>
                <div>
                    <span>Package number</span>
                    <input type="text"/>
                </div>
                <div>
                    <span>Pickup time</span>
                    <input type="text"/>
                </div>
            </div>
            <div>
                <button>Book</button>
                <button>cancel</button>
            </div>
        </div>
    )
}

export default Pickup;