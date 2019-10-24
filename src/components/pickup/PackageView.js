import React from 'react';

class PackageView extends React.Component{
    render() {
        return (
            <div>
                <h1>New package item</h1>
                <div>
                    <div><span>PackageNumber</span><input type="text"/></div>
                    <div><span>Receiver</span><input type="text"/></div>
                    <div><span>Phone Number</span><input type="text"/></div>
                    <div><span>Weight</span><input type="text"/></div>
                </div>
                <div>
                    <button onClick={this.postNewPickup}>Confirm</button>
                    <button>Cancel</button>
                </div>
            </div>
        );
    }
}

export default PackageView;