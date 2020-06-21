import React, { Component } from "react";
import InboxList from ".../Inbox/InboxList";

class Inbox extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div className = 'container'>
            <InboxList history = {this.props.history}/>
                  </div>

        );
    }
}
export default Inbox