import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer'

class FavlistAdd extends Component {
    constructor() {
      super();
        this.state = {
            UnparsedAddress: '',
            CountyOrParish: '',
            PostalCode: '',
            ListAgentFullName: '',
            ListAgentPreferredPhone: '',
            ListOfficeName: '',
            BedroomsPossible: '',
            BathroomsTotalInteger: '',
            LivingArea: '',
            YearBuilt: '',
            media: '',
            comments: '',
            seenstatus: '',
            fireRedirect: false,
            };
        this.favCreateChange = this.favCreateChange.bind(this);
        this.favCreateSubmit = this.favCreateSubmit.bind(this);
    }

    favCreateChange(fav){
        const name = fav.target.name;
        const value = fav.target.value;
        this.setState({
            [name]: value,
        });
      }

      favCreateSubmit(fav){
        fav.preventDefault();
      axios
        .post('/favlisting', {
            UnparsedAddress: this.state.UnparsedAddress,
            CountyOrParish: this.state.CountyOrParish,
            PostalCode: this.state.PostalCode,
            ListAgentFullName: this.state.ListAgentFullName,
            ListAgentPreferredPhone: this.state.ListAgentPreferredPhone,
            ListOfficeName: this.state.ListOfficeName,
            BedroomsPossible: this.state.BedroomsPossible,
            BathroomsTotalInteger: this.state.BathroomsTotalInteger,
            LivingArea: this.state.LivingArea,
            YearBuilt: this.state.YearBuilt,
            media: this.state.media,
            comments: this.state.comments,
            seenstatus: this.state.seenstatus,
        }).then(x =>{
            console.log(x);
            this.setState({
                newId: res.data.data.id,
                fireRedirect: true,
            });
        }).catch(err => console.log(err));
        fav.target.reset();
    }
    render(){
        return (
         <div className="favAdd">
            <form onSubmit={this.favCreateSubmit}>
            <label>Address: <input name="UnparsedAddress" value={this.state.UnparsedAddress}/></label>
            <label>County: <input name="CountyOrParish" value={this.state.CountyOrParish}/></label>
            <label>Zip Code: <input name="PostalCode" value={this.state.PostalCode}/></label>
            <label>Listing Agent: <input name="ListAgentFullName" value={this.state.ListAgentFullName}/></label>
            <label>Listing Agent Contact: <input name="ListAgentPreferredPhone" value={this.state.ListAgentPreferredPhone}/></label>
            <label>Listing Agent Office: <input name="ListOfficeName" value={this.state.ListOfficeName}/></label>
            <label>No. of Bedrooms: <input name="BedroomsPossible" value={this.state.BedroomsPossible}/></label>
            <label>No. of Bathrooms: <input name="BathroomsTotalInteger" value={this.state.BathroomsTotalInteger}/></label>
            <label>Total Sqft: <input name="LivingArea" value={this.state.LivingArea}/></label>
            <label>Year Built: <input name="YearBuilt" value={this.state.YearBuilt}/></label>
            <label>Photos: <input name="media" value={this.state.media}/></label>
            <label>User Comments: <input name="comments" type="text" placeholder="Description" value={this.state.comments}
                onChange={this.favCreateChange}/></label>
            <label>Status: <input name="seenstatus" type="text" placeholder="Status" value={this.state.seenstatus} 
                onChange={this.favCreateChange}/></label>
            </form>
            {this.state.fireRedirect ? <Redirect push to={`favlistadd/${this.state.newId}`}/> 
            :''}
         </div>
         <footer />
        );
      }
    }

      export default FavlistAdd;