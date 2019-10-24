import React from 'react';
import Pickup from "./Pickup";

class PickupView extends React.Component {
    postNewPickup = (pickupNumber, pickupTime)=>{
        const newPickup = {
            pickupNumber: pickupNumber,
            pickupTime: pickupTime
        };

        fetch("http://localhost:8080/pickups", {
            mode: 'cors',
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(newPickup)
        })
        .catch(e=>{
            console.log(e);
        });
    };

    render() {
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
                    <button onClick={()=>this.postNewPickup(2, "now2")}>Book</button>
                    <button>cancel</button>
                </div>
            </div>
        )
    }
}

export default PickupView;