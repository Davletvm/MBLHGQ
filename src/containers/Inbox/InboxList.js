import React from "react";
import MessageDetail from "../../components/MessageDetail";
import 'react-virtualized/styles.css'
import '../../style.css';
import {Route} from "react-router-dom";
import StatusBtns from '../../components/StatusBtns';

const InboxList = (props) => {
    const {match: {url} = {}, history} = props;
    return <div>
        <main className="flex-fill">
            <div className="row">
                <div className="col-12 d-flex flex-column">
                    <div className="d-flex flex-row">
                        <StatusBtns history={history}/>
                    </div>
                </div>
            </div>
        </main>
        <Route path={`${url}/:id`} component={MessageDetail}/>
    </div>
}

export default InboxList;