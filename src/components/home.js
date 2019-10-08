import React from 'react'
import Nav from '../components/nav'
import '../main.css';

const Home =()=>{
    return (
        <div>
            <Nav/>
        <div className="drppnt">
        <h2 className="heading">Search For a Drop Point</h2>
        <div className="card">
            <div className="container">
                <form className="searchform">
                    <label>Enter a location for your drop point</label><br />
                    <input type="search" placeholder="Location" />
                    <label>Number of bags</label>
                    <input type='number' />
                    Select all that apply. <br />
                    <input type="checkbox" name='suitcases' />Suitcases
                    <input type="checkbox" name='briefcases' />Briefcases
                    <input type="checkbox" name='suitcases' />Handbag
                    <br/><button className="submitbutton">Submit</button>

                </form>



        </div>

    </div>
    </div>


        </div>
    )
}

export default Home;