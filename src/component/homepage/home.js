import React from 'react'
import './home.css'
import Movies from '../movies/movies'


const home = () => {
    return (
        <>
            <div className='home-body'>
                <div className='home-header'>
                    <div className='home-title'>
                        <h1>The<br />Movie<br />Tracker</h1>

                    </div>
                    <div className='home-input'>
                        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
                        <input placeholder='🔍 Search a movie or a series' />
                    </div>
                    <div />
                </div>
                <div className='watching'>
                    <div className='Currently-Watching'>
                        <p>Currently Watching</p>
                        <div className='posters'>
                            <Movies />
                        </div>
                    </div>


                    <div className='Suggested-To-Watch'>
                        <p>Suggested To Watch</p>
                        <div className='posters'>
                            <Movies />
                        </div>
                    </div>
                </div>
                <div className='previously'>
                    <p>previously Watched</p>
                    <div className='posters'>
                        <Movies />
                    </div>
                </div>


            </div>
        </>
    )
}

export default home
