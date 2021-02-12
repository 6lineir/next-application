import React, { Component } from 'react';
import $ from 'jquery';
import Fee from '../components/fee';
class Crypto extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data : {}
        }
    }

    // componentDidMount() {
    //   this.fetch();
    // }
    // fetch() {
    //   var context = this;
  
    //   window.setTimeout(function() {
    //     $.ajax({
    //       url: "https://api.coindesk.com/v1/bpi/currentprice.json",
    //       dataType: "json",
    //       method: "GET",
    //       success: function(response) {
    //         context.setState({
    //           price: response.bpi.USD.rate,
    //           lastFetch: response.time.updated
    //         });
    //       }
    //     });
    //   }, 3000);
    // }
    componentDidMount() {
      
        fetch('https://api.coindesk.com/v1/bpi/currentprice/IRR.json')
            .then(res => res.json())
            .then(json => {
              
                this.setState({
                    data: json
                })
              })
        // setInterval(this.fetch , 3000)
    }
  render() {
    const { data } = this.state
    if (!data.bpi) return <div className="loader"><h2>Loading...</h2></div>
        const rial = data.bpi.IRR
        const dollar = data.bpi.USD
    return (
      <div>
       <h1>Price R: {rial.rate}</h1> 
       <hr />
       <h1>Price R: {dollar.rate}</h1> 
      </div>
    );
  }
}

export default Crypto;