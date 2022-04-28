import React, { useState } from 'react';
import { recipes } from 'config';


function renderList(array) {
    return array.map(x => <li key={x}>{x}</li>)
}


export default function Recipe (props) {
     
    const index = props.index;

    let {name, imgURL, time, servingNum, cost, ingredients, steps} = recipes[index];

    const [infoVis, setInfoVis] = useState(false);

    function toggleInfo() {
        if (infoVis) {
            setInfoVis(false);
        } else {
            setInfoVis(true);
        }
    }
    

    
    
    return(
        <div className='recipeTile'>
            <h2>{name}</h2>
            <img src={imgURL} alt={name}/>
            <div className='summary'>
                <p>Time: {time}</p>
                <p>Servings: {servingNum}</p>
                <p>Cost: {cost}</p>
            </div>
            <p onClick={toggleInfo}>{infoVis ? 'Hide Details' : 'Show Details'}</p>
            <div className={'details' + infoVis}>
                <h3>Ingredients</h3>
                <ul>
                    {renderList(ingredients)}
                </ul>
                <h3>Steps</h3>
                <ol>
                    {renderList(steps)}
                </ol>
            </div>
        </div>
    )
    

}