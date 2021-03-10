import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';
import imgMale from '../../Image/male.png';
import imgFemale from '../../Image/female (1).png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFutbol, faMars, faPodcast, faFlag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';






const Details = () => {
    const { idLeague } = useParams();
    const [leagues, setLeagues] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues[0]))

    }, []);
    console.log(leagues)
    const { dateFirstEvent, strCountry, strGender, strLeagueAlternate, strBadge, strDescriptionEN, strDescriptionFR, strFanart2, strYoutube } = leagues;
    const image = strGender === 'Male' ? imgMale : imgFemale;

    return (
        <div className='main-container'>
            <div className="header">
                <div className='header-image'>
                    <div className="banner-logo">
                        <img src={strBadge} alt="" />
                        <h1>{strLeagueAlternate}</h1>
                    </div>

                </div>

            </div>

            <div className="main">
                <div className='team-info'>
                    <div className='info'>
                        <h4 id='league-name'>{strLeagueAlternate}</h4>
                        <h4><FontAwesomeIcon icon={faPodcast} /> Founded: {dateFirstEvent}</h4>
                        <h4><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h4>
                        <h4><FontAwesomeIcon icon={faFutbol} /> Sports Type: Football</h4>
                        <h4><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h4>
                    </div>
                    <div className='team-image'>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="paragraph">
                    <p>{strDescriptionFR}</p>
                    <br />
                    <p>{strDescriptionEN}</p>
                </div>
            </div>
            <div className="icon">
                <div className="icon-1 ic">
                    <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="icon-2 ic" >
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div className="icon-3 ic">
                    <FontAwesomeIcon icon={faTwitter} />
                </div>




            </div>
        </div>
    );
};

export default Details;


{/* <i class="far fa-futbol"></i>faFutbol
<i class="fas fa-mars"></i>faMars
<i class="fas fa-podcast"></i>faPodcast
<i class="fab fa-font-awesome-flag"></i>faFontAwesomeFlag
<i class="fab fa-twitter-square"></i>faTwitterSquare
<i class="fab fa-youtube-square"></i>faYoutubeSquare
<i class="fab fa-facebook-square"></i>faFacebookSquare 
<i class="fas fa-flag"></i> faFlag
<i class="fas fa-arrow-right"></i> faArrowRight
<i class="fab fa-facebook"></i>faFacebook
<i class="fab fa-twitter"></i>faTwitter
<i class="fab fa-facebook-f"></i>
<i class="fab fa-facebook"></i>




*/}
