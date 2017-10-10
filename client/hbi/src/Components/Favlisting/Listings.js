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
          axios.get('http://localhost:3001/event/')
          .then(res => {
           this.setState({
               eventApiData: res.data.data,
               eventApiDataLoaded: true
           })    
        })
      }

      renderEvents(data){ //return twice because use of .map
            return data.map(aEvent => {
                return (
                    <Events key={aEvent.id} event={aEvent} />

                );
                
            });
            this.setState({
                eventApiDataLoaded: false,
            })

        }
      
        render(){
            return(
                <div ClassName="eventsList">
                    {this.state.eventApiDataLoaded ? this.renderEvents(this.state.eventApiData) : " "}
                </div>
            )
          }
        }
        
      export default Listings;