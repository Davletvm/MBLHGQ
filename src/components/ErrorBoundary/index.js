import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {errorOccurred: false};
    }

    componentDidCatch(error, info) {
        this.setState({errorOccurred: true});
    }

    render() {
        const {errorOccurred} = this.state;
        const {children} = this.props;
        if (errorOccurred) {
            return <h1 className='col-12 w-100 d-flex justify-content-center align-items-center text-danger'>Something went wrong!</h1>
        }
        return children
    }
}

export default ErrorBoundary;