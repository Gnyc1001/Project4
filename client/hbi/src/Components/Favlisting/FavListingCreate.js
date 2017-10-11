import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer'

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
        this.favCreateDropDown = this.favCreateDropDown.bind(this);
    }

    componentDidMount(){
        console.log(this.state)
    }

    favCreateChange(fav){
        fav.preventDefault();
        const name = fav.target.name;
        const value = fav.target.value;
        this.setState({[name]: value});
      }
      handleGenreChoice(fav) {
        fav.preventDefault();
        this.setState({seenstatus: fav.target.value});
      }

      favCreateSubmit(fav){
        fav.preventDefault();
      
        let dataset = {
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
            user_id: this.state.user_id||0
        }
        console.log(dataset);
        axios({
            method: 'POST', url: `http://localhost:3001/favlisting`,
            data:{dataset}        
            }).then(x =>{
            console.log(x);
            this.setState({
                fireRedirect: true,
            });
        }).catch(err => console.log('error in create'));
        fav.target.reset();
    }
    render(){
        return (
        <div>
         <div className="favAdd">
            <form onSubmit={(fav)=> {this.favCreateSubmit(fav)}}>
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
            <label>User Comments: <input name="comments" type="text" placeholder="Comments" value={this.state.comments}
                onChange={this.favCreateChange}/></label>
            <label>Status: <select className="seenstatus" value={this.seenstatus} onChange={this.favCreateDropDown}>
                <option value="" disabled selected>SELECT STATUS</option>
                <option value="Seen">Seen</option>
                <option value="Not Seen">Not Seen</option>
                <option value="Requested More Info">Requested More Info</option>
                </select></label>
                <input className="submit" type="submit" value="Add to Favorites"/>
            </form>
            {this.state.fireRedirect ? <Redirect push to={`FavListingShow/${this.state.newId}`}/> 
            :''}
         </div>
         <Footer />
         </div>
        );
      }
    }

      export default FavlistAdd;