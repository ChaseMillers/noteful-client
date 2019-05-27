import React, { Component } from 'react';

export default class ErrorMessage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          hasError: false
        };
      }

      static getDerivedStateFromError(error) {
        return { hasError: true };
      }

      render() {
        if (this.state.hasError) {      
          return (
            <h2>Sorry somthing went wrong, try again later.</h2>
          );
        }
        return this.props.children;
      }  
}