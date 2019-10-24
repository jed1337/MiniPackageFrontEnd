import React from 'react';

class PackageView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            receiver: "",
            phoneNumber: "",
            weight: ""
        }
    }

    postNewPackage = () => {
        const newPackage = {
            receiver: this.state.receiver,
            phoneNumber: this.state.phoneNumber,
            weight: this.state.weight
        };

        fetch("http://localhost:8080/packages", {
            mode: 'cors',
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(newPackage)
        })
            .catch(e => {
                console.log(e);
            });
    };

    updateReceiver = (e) => {
        this.setState({receiver: e.target.value});
    };

    updatePhoneNumber = (e) => {
        this.setState({phoneNumber: e.target.value});
    };

    updateWeight = (e) => {
        this.setState({weight: e.target.value});
    };

    render() {
        return (
            <div>
                <h1>New package item</h1>
                <div>
                    <div>
                        <span>Receiver</span>
                        <input type="text" value={this.state.receiver} onChange={this.updateReceiver}/>
                    </div>
                    <div>
                        <span>Phone Number</span>
                        <input type="text" value={this.state.phoneNumber} onChange={this.updatePhoneNumber}/>
                    </div>
                    <div>
                        <span>Weight</span>
                        <input type="text" value={this.state.weight} onChange={this.updateWeight}/>
                    </div>
                </div>
                <div>
                    <button onClick={this.postNewPackage}>Confirm</button>
                    <button>Cancel</button>
                </div>
            </div>
        );
    }
}

export default PackageView;