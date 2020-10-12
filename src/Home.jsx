import React from 'react';
import './App.css';
//COMPONENT
import Jumbotrom from './Components/Jumbotrom/Jumbotrom';
import NavBar from './Components/Navbar/Navbar';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';

function Home(props){
    const list = [1, 2 ,3 ,4];
    return(
        <div>
            <NavBar />
            <div className="content col-md-10 offset-md-1">
                <Jumbotrom />
                <div className="row ">
                    {list.map( (number) => {
                        return <Card />
                    })}
                </div>
            </div>
            <Footer />        
        </div>
    )
}

export default Home;