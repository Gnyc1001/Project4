import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer'

class Listings extends Component {
    constructor(){
        super();
        this.state= {
            eventApiDataLoaded: false,
            eventApiData: null
        }
      }

      componentDidMount(){
          console.log('fetching')
          axios.get('http://localhost:3001/listing/')
          .then(res => {
           this.setState({
               eventApiData: res.data.data,
               eventApiDataLoaded: true
           })    
        })
      }

      renderEvents(data){ //return twice because use of .map
            return data.map(xListing => {
                return (
                    <Listings key={xListing.id} listing={xListing} />

                );
                
            });
            this.setState({
                eventApiDataLoaded: false,
            })

        }
      
        render(){
            return(
                <div ClassName="Listings">
                    {this.state.eventApiDataLoaded ? this.renderEvents(this.state.eventApiData) : " "}
                </div>
            )
          }
        }

      export default Listings;