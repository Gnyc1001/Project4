import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer'
//show one listing to be updated by user
class FavListingUpdate extends Component {
    constructor(){
        super();
        this.state = {
            fav: {},
            fireRedirect: false,
        };
      }
      this.favUpdateChange = this.favUpdateChange.bind(this);
      this.favSubmitChange = this.favSubmitChange.bind(this);
      this.favCreateDropDown = this.favCreateDropDown.bind(this);

      componentDidMount(){
        let id = this.props.id
        console.log(this.props.params)
        console.log('fetching favlisting update')
        axios({
          method:'POST',
          url: `http://localhost:3001/favlisting/${this.props.id}`,
          data: {id}
        })
          .then(x => {
           this.setState({
               fav: x.data.data,
               favApiDataLoaded: true,
           })    
        }).catch(err => console.log(err))
      }

      handleInputChange(fav){
        const name = fav.target.name;
        const value = fav.target.value;
        this.setState({
          [name]: value,
        });
      }

      eventFormSubmit(fav){
        fav.preventDefault();
      axios
        .put(`http://localhost:3001/favlisting/${this.props.match.params.id}`, {
            title: this.state.title,
            address: this.state.address,
            event_date: this.state.event_date, 
            event_time: this.state.event_time,
            genre: this.state.genre,
            description: this.state.description,
            zip_code: this.state.zip_code,
          })
          .then(xdata => {
              console.log(x);
              this.setState({
                  newId: xdata.data.data.id,
                  fireRedirect: true,
              });
            })
          .catch(err => console.log(err));
          fav.target.reset();
        }

        render(){
            return (
             <div>
            
              <div className="favUpdate">
              <form onSubmit={(fav)=> {this.favSubmitChange(fav)}}>
              <label>User Comments: <input name="comments" type="text" placeholder="Description" value={this.state.comments}
                onChange={(fav)=> {this.favCreateChange(fav)}/></label>
                <label>Status: <select className="seenstatus" value={this.seenstatus}   
                onChange={(fav)=> {this.favCreateDropDown(fav)}>
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

      export default FavListingUpdate;