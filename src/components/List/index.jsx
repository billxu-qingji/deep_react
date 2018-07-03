import React from 'react';
import { connect } from 'react-redux';
import { fetchListData } from '../../fetch';
import { getList } from '../../actions/list';
import './index.css';

class List extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
    }
  }
  componentWillReceiveProps(props) {
    console.log(props.list);
  }
  clickHandler = async () => {
    this.setState({
      isFetching: true,
    })
    const res = await fetchListData();
    this.setState({
      isFetching: false,
    })
    console.log(res);
    this.props.dispatch(getList(res));
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>GET LIST</button>
        <ul>
          {
            this.props.list.map(item => {
              return <li key={item}>{item}</li>
            })
          }
        </ul>
        {
          this.state.isFetching ? <div className="mask"></div> : ''
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    list: state.list
  }
}
export default connect(mapStateToProps)(List);