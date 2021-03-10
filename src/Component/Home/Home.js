import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setTeams(data.leagues))
    }, [])
    const leagues = teams.slice(0, 21);
    // console.log(leagues);
    return (
        <div>
            <div  className='teams-background'>
                <h2>Champion league 2021</h2>
            </div>
            <div className='teams-container'>
                {
                    leagues.map(tm => <Teams team={tm} key={tm.idLeague}></Teams>)
                }
            </div>
        </div>

    );
};

export default Home;