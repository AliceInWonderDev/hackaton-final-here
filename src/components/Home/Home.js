import React, { Component } from 'react';
import './Home.css'
import eventocultural from '../../images/eventocultural.jpg'
import TelephoneNav from '../TelephoneNav/TelephoneNav.js'
import PrincipalFooter from '../PrincipalFooter/PrincipalFooter'


class Home extends Component {
    

    hola(){
        alert('hola')
    }

    render() {
        return (
            <div className="App">
            <TelephoneNav />
                <div className="divEvents">
                    <nav className="events">
                        <h3>PRÓXIMOS EVENTOS</h3>
                    </nav>
                    <div className="photoEvents" onClick={this.hola.bind(this)}>
                        <img src={eventocultural} alt="evento" className="cultural-event" />
                        <div className="cinema">Cine</div>
                        <p className="cinemaP">Cine fulldome en planetario de Santiago</p>
                    </div>
                </div>

                <PrincipalFooter />

            </div>
        )
    }
}

export default Home;