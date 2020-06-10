import React, { Component } from 'react';
import Loading from '../Loading/Loading';

const errorBoundary = WrappedComponent => {
    class ErrorBoundary extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                hasError: false
            }
        }
        componentDidCatch() {  this.setState({hasError: true}) }
        render({ hasError } = this.state) {
            if(hasError) { return <Loading /> }
            
            return (
                <WrappedComponent {...this.props}>
                    {this.props.children}
                </WrappedComponent>
            )
        }
    }
    return ErrorBoundary
}

export default errorBoundary