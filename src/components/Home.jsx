import React from 'react'
import Product from './Product';

function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark">
                <img src="https://i.ytimg.com/vi/XGlyJ5xqbK0/maxresdefault.jpg" class="card-img" alt="backgrd" height="700px" />
                <div className="card-img-overlay">
                    <h5 classNames="card-title">New Season Arrival</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small>Last updated 3 mins ago</small></p>
                </div>
            </div>
            <Product/>
        </div>
    )
}

export default Home
