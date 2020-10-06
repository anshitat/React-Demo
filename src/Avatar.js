import React from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

const Avatar = (props) =>{
const avatarListArray = [
    {
        id:1,
        name:"John",
        work:"Web Developer"
    },
    {
        id:2,
        name:"Gilbert",
        work:"Front End"
    },
    {
        id:3,
        name:"Elena",
        work:"Back End"
    },
    {
        id:3,
        name:"Will",
        work:"Full Stack"
    }
]
 const arrayCard = avatarListArray.map((arrayItem, i)=>{
    return <Avatarlist key={i} id={avatarListArray[i].id} name={avatarListArray[i].name} work={avatarListArray[i].work}/>
    
 })

    return(
           <div className="mainPage">
            <h1 className="tc">Welcome beautiful people</h1>
            {arrayCard};
            <button>Subsscribe</button>
        </div>  
    )
}

export default Avatar;