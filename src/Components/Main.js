import React from 'react'
import {Component} from 'react'
import { Switch,Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/detail" component={Detail} />
        </Switch>
    </Router>
)

class Main extends Component {
    render(){
        return (
            <section className="container main-container" >
                {routing}
            </section>
        );
    }
}

export default Main;