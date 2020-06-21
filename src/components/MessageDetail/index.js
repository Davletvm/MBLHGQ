import React from "react";
import * as _ from "lodash";

export class MessageDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {message} = this.props;
        if (_.isEmpty(message)) {
            return null
        }
        return <div>
            <div>
                <div>
                    <p className="text-uppercase text-muted">Subject</p>
                    <h4>{message.subject}</h4>
                </div>
            </div>
            <div>
                <div className="row">
                    <div className="col-sm-8">
                        <p className="text-uppercase text-muted">From</p>
                        <h4>
                            <a href="'mailto:'+selected.fromAddress">
                                {message.from}
                            </a>
                        </h4>
                    </div>
                    <div className="col-sm-4">
                        <p className="text-uppercase text-muted">Sent</p>
                        <h6>{message.receivedAt}</h6>
                    </div>
                    <div className="col-sm-12">
                        <p>
                            {message.body}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default MessageDetail;