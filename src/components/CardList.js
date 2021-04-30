import React from "react";
import Card from '../components/Card';


const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            handle={robots[i].handle}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;