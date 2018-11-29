import React from "react";
import PropTypes from "prop-types";
import "./Activity.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardTitle, CardBody, CardImg, CardImgOverlay } from "reactstrap";
import DisplayDifficultyIcon from "./DisplayDifficultyIcon";

import {
  faBolt,
  faClock,
  faMapMarkerAlt,
  faUser
} from "@fortawesome/free-solid-svg-icons";

library.add(faBolt, faClock, faMapMarkerAlt, faUser);

const sports = ["Running", "Vélo", "Football", "Sport Ext.", "Sport Int."];

const Activity = props => {
  return (
    <div className="activity-container">
      <Card className="activity" inverse>
        {props.sport_name ? (
          <CardImg
            width="100%"
            src={`./images/${props.sport_name}.jpg`}
            alt={props.sport_name}
          />
        ) : (
          <CardImg width="100%" src="./images/default.jpg" alt="default" />
        )}
        <CardImgOverlay>
          <CardTitle>Session {props.sport_name}</CardTitle>
          <CardBody>
            <span className="difficulty">
              <DisplayDifficultyIcon difficulty={props.activity_difficulty} />
            </span>
          </CardBody>
          <div className="activity_details">
            <FontAwesomeIcon className="ml-2 mr-1" icon="clock" />
            {props.activity_start_time}
            <FontAwesomeIcon className="ml-2 mr-1" icon="map-marker-alt" />
            {props.activity_city}
            <FontAwesomeIcon className="ml-2 mr-1" icon="user" />
            {props.user_pseudo}
          </div>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

Activity.propTypes = {
  sport_name: PropTypes.string.isRequired,
  activity_difficulty: PropTypes.number.isRequired,
  activity_start_time: PropTypes.string.isRequired,
  activity_city: PropTypes.string.isRequired,
  user_pseudo: PropTypes.number.isRequired
};

export default Activity;
