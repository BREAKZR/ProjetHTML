import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css";

class Navbar extends Component {
    componentDidMount(){ 
        M.AutoInit(); 
    }

    render(){
        return (
            <header>
                <div className="row deep-purple darken-3">
                    <div className="container valign-wrapper">
                        <Link to="/" className="col l6 m4 hide-on-small-only"> <h2 className="white-text">CleanStreet</h2> </Link>
                        <Link to="/"> <h6 className="hide-on-med-and-up center white-text col s4">CleanStreet</h6> </Link>

                        <div class="nav-wrapper white col l4 m4 offset-m2 s6">
                            <form>
                                <div class="input-field">
                                    <input id="search" type="search" required />
                                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                </div>
                            </form>
                        </div>

                        <div className="col l2 m2 s2">
                            <Link class="btn-floating btn-large waves-effect waves-light deep-purple"><i class="material-icons">person</i></Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;