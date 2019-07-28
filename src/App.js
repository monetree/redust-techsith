import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div>Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <hr/>
        <div>History</div>
        <div>
          <ul>
            {
              this.props.history.map(el => (
                <li
                 key={el.id}
                 onClick={() => this.props.onDeleteItem(el.id)}
                 >
                 {el.age}
                </li>
              ))

            }
          </ul>
        </div>
      </div>
    );
  }
} 

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type:'AGE_UP', val: 10}),
    onAgeDown: () => dispatch({type:'AGE_DOWN', val: 5}),
    onDeleteItem: (id) =>  dispatch({type:'DELETE_ITEM', key:id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
