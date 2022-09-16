import React from "react";
import "./header.css";
import PublicIcon from '@mui/icons-material/Public';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-main">
                <PublicIcon className="earth-icon"></PublicIcon>
                <span>my travel journal</span>
            </div>
        )
    }
}
