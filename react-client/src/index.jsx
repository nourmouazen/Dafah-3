import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddItems from './components/AddItems.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  submit (newItem){
    console.log(newItem)
    $.ajax({
      url: "/tasks",
      method: "POST",
      data:{items : newItem},
      dataType: "json",
      success:function () {console.log("post method succeeded")},
      error: function () {console.log("post method failed")}
    });
  }
  // submit() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (<div>
      <h1>quote</h1>
      <AddItems onSubmit={this.submit.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));