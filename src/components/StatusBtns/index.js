import React from "react";
import styled, {css} from 'styled-components'
import 'react-virtualized/styles.css'
import {STATUS_TYPES} from '../../util/index';
import * as _ from "lodash";

const PrimaryBtn = styled.a`
    display: flex;
    justify-content: center;
    border-radius: 3px;InboxList
    padding: 0.5rem 0;
    margin-right: 2em;
    margin-bottom: 2px;
    width: 11rem;
    background: transparent;
    color: blue !important;
    border: 2px solid blue;
    
    ${props => props.active && css`
    color: #fff !important;
    background-color: #0069d9;
    border-color: #0062cc;
    `}
`

class StatusBtns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: ''}
    }

    setMailStatus = (status) => {
        this.setState({status})
        const {history} = this.props;
        history.push(`/${status}`)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const {status} = this.props;
        const {status: current_status} = this.state;
        if (_.isEmpty(current_status) && !_.isEmpty(status)) {
            this.setState({status})
        }
    }

    render() {
        const {status} = this.state;
        return <main className="flex-fill">
            <div className="row">
                <div className="col-12 d-flex flex-column">
                    <div className="d-flex flex-row">
                        <div className="col-lg-2 col-md-2 py-3">
                            <ul className="list-group sticky-top sticky-offset mt-3">
                                <PrimaryBtn onClick={() => this.setMailStatus(STATUS_TYPES.RECEIVED)}
                                            active={status === STATUS_TYPES.RECEIVED}>Inbox </PrimaryBtn>
                                <PrimaryBtn onClick={() => this.setMailStatus(STATUS_TYPES.SENT)}
                                            active={status === STATUS_TYPES.SENT}>Sent </PrimaryBtn>
                                <PrimaryBtn onClick={() => this.setMailStatus(STATUS_TYPES.DRAFT)}
                                            active={status === STATUS_TYPES.DRAFT}>Drafts </PrimaryBtn>
                                <div className="d-md-block d-none">
                                    <hr/>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    }
}

export default StatusBtns;