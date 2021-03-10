import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';
import './Teams.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Teams = (props) => {
    const { strTeamBadge, strLeague, idLeague } = props.team;
    const [league, setLeague] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    })
    const { strBadge } = league;
    return (
        <div>
            
            <div className='team-container'>
                <img src={strBadge} alt="" />
                <h3>{strLeague}</h3>
                <button><Link to={'/teams/' + idLeague} className='button'>Explore  <FontAwesomeIcon icon={faArrowRight} /></Link></button>

            </div>
        </div>
    );
};

export default Teams;