import React from "react";
import './UserItem.css'
import Avatar from '../../shared/components/UIElements/Avatar'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Card } from "react-bootstrap";

const UserItem = props => {

    return(
        <li className="user-item">
            <Card style={{margin: '10px',}}>
                <div className="user-item__content">
                    {/* Dynamic Path of where we wanna go to */}
                    <Link to={`/${props.id}/places`} >
                        <div className="user-item__image">
                            {/* <img src={props.image} alt={props.name} /> */}

                            <Avatar
                                image={props.image}
                                alt = {props.name}
                            />

                        </div>

                        <div className="user-item__info">
                            <h2>{props.name}</h2>
                            <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
                        </div>
                    </Link>

                </div>
            </Card>

        </li>

    )

}

export default UserItem

