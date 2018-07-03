import React, { Component, PropTyes } from 'react';

// 把prop从obj里面过滤掉
function dissoc(obj, prop) {
  let result = {};
  for (let p in obj) {
    if (p !== prop) {
      result[p] = obj[p];
    }
  }
}
const Promised = (promiseProp, Wrapped) => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      value: null,
    }
  }
  componentDidMount() {
    this.getData(this.props);
  }
  componentWillReceiveProps(props) {
    this.getData(props);
  }
  getData = (props) => {
    props[promiseProp].then(response => response.json())
      .then(value => this.setState({ loading: false, value }))
      .catch(error => this.setState({ loading: false, error }))
  }
  render() {
    console.log('render.....');
    if (this.state.loading) {
      return <span>loading.....</span>
    } else if (this.state.error != null) {
      return <span>error: {this.state.error.message}</span>
    } else {
      const propsWithoutThePromise = dissoc(this.props, promiseProp);
      return <Wrapped {...this.propsWithoutThePromise} {...this.state.value} />
    }
  }
}
export default Promised;