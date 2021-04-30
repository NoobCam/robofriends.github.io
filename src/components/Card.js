import React from 'react';

const Card = (props) => {
    const { name, handle, id } = props;
    return (
        <div className='tc bg-gold dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>    
                <p>{handle}</p>
            </div>
        </div>
    );
}

export default Card;