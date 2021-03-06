import React from 'react';

import ErrorIndicator from '../error-indicator';

class ErrorBoundary extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render () {
        const { hasError } = this.state;

        if (hasError) {
            return (
                <ErrorIndicator />
            );
        }

        return this.props.children;
    };
}

export default ErrorBoundary;
