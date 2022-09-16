import React from "react";
import "./card.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        // this.function = this.function.bind(this);
        // this.state;
    }

    render() {
        return (
            <div className="card">
                <div className="image" style={{backgroundImage:`url(${this.props.imageUrl})`}}/>
                <div className="info">
                    <div className="location">
                        <LocationOnIcon className="location-icon"/>
                        <span>{this.props.location}</span>
                        <a href={this.props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </div>
                    <h1>
                        {this.props.title}
                    </h1>
                    <h2>
                        {this.props.startDate} - {this.props.endDate}
                    </h2>
                    <span>
                        {this.props.description}
                    </span>
                </div>
            </div>
        )
    }
}
