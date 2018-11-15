// Reference https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html

import React, { Component } from "react";

export default importComponent =>
  class extends Component {
    state = {
      component: null
    };
    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({ component });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
