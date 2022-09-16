import React from "react";
import css from "./soon-card.css";

export default class SoonCard extends React.Component {
    constructor(props) {
        super(props);
        this.navigateUrl = this.navigateUrl.bind(this);
        // this.function = this.function.bind(this);
        // this.state;
    }

    render() {
        return (
            <div className="card">
                <div className="soon image" style={{ backgroundImage: `url(${this.props.imageUrl})` }}
                    onClick={this.navigateUrl}/>
            </div>
        )
    }

    navigateUrl() {
        window.open(this.props.googleMapsUrl, '_blank');
        // window.location.href = this.props.googleMapsUrl;
    }
}
