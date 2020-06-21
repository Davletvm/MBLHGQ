import React from "react";
import MessageDetail from "../MessageDetail";
import moment from 'moment';
import 'react-virtualized/styles.css'
import {List} from 'react-virtualized';
import messages from "../../data/messages.json";
import * as _ from 'lodash';
import StatusBtns from '../StatusBtns';
import {Route} from "react-router-dom";
import {DateSpan, UserSpan} from '../../util'

class FilteredMail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filtered_message: {}}
    }

    componentDidMount() {
        const {match: {url} = {}} = this.props;
        this.setState({filtered_message: _.filter(messages, {status: url.replace("/", "")})})
    }

    componentWillReceiveProps(nextProps) {
        const {match: {url} = {}} = nextProps;
        const mail_type = url.replace("/", "")
        this.setState({filtered_message: _.filter(messages, {status: mail_type}), current_message: {}})
    }

    rowRenderer = ({key, index, isScrolling, isVisible, style}) => {
        const {filtered_message} = this.state;
        if (_.isEmpty(filtered_message)) {
            return null
        }
        return (
            <div key={key} style={style} onClick={() => {
                this.setState({current_message: filtered_message[index]})
            }}>
                {<div className='list-block'>
                    <div className="d-flex flex-row mt-2 mb-2">
                        <div>
                            <UserSpan>
                                {filtered_message[index].from}
                            </UserSpan>
                        </div>
                        <div>
                            <DateSpan>
                                {moment(filtered_message[index].receivedAt).fromNow()}
                            </DateSpan>
                        </div>
                    </div>
                </div>}
            </div>
        );
    };

    render() {
        const {filtered_message, current_message, status} = this.state;
        const {match: {url} = {}} = this.props;
        return <div>
            <main className="flex-fill">
                <div className="row">
                    <div className="col-12 d-flex flex-column">
                        <div className="d-flex flex-row">
                            <StatusBtns history={this.props.history} status={status}/>

                            <div className="col-md-4 py-3 tab-content">
                                <div id="messages" className="tab-pane active">
                                    <div className="d-flex flex-sm-row flex-column py-1 mb-1">
                                    </div>
                                    <div>
                                        <List
                                            width={300}
                                            height={700}
                                            rowCount={!_.isEmpty(filtered_message) ? filtered_message.length : messages.length}
                                            rowHeight={70}
                                            className={'list-block'}
                                            rowRenderer={this.rowRenderer}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-5 mt-4 pt-3 pl-0 ml-0'>
                                <MessageDetail message={current_message}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Route path={`${url}/:id`} component={MessageDetail}/>
        </div>
    }
}

export default FilteredMail;