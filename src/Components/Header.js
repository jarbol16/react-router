import React from 'react'
import {Component} from 'react'

class Header extends Component {
    render(){
        return (
            <header className="fixed-top">
                <div className="container" style={{padding:"7px"}}>
                    <div className="row justify-content-end">
                        More Info
                    </div>
                </div>
                <nav className="navbar navbar-expand-md ">
                    Menu
                </nav>
            </header>
        );
    }
}

export default Header;