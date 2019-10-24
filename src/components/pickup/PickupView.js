import React from 'react';

class PickupView extends React.Component {
    constructor(props) {
        super(props);
        this.state={pickupNumber: "", pickupTime:""}
    }
    updatePickupNumber = (e)=>{
        this.setState({pickupNumber: e.target.value});
    };

    updatePickupTime = (e)=>{
        this.setState({pickupTime: e.target.value});
    };

    postNewPickup = ()=>{
        const newPickup = {
            pickupNumber: parseInt(this.state.pickupNumber),
            pickupTime: this.state.pickupTime
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
                        <input type="text" value={this.state.pickupNumber} onChange={this.updatePickupNumber}/>
                    </div>
                    <div>
                        <span>Pickup time</span>
                        <input type="text" value={this.state.pickupTime} onChange={this.updatePickupTime}/>
                    </div>
                </div>
                <div>
                    <button onClick={this.postNewPickup}>Book</button>
                    <button>Cancel</button>
                </div>
            </div>
        )
    }
}

export default PickupView;