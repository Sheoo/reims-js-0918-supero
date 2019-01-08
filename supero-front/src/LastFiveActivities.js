import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import formatDate from "./formatDate";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LastFiveActivities.css";

import {
  faRunning,
  faBicycle,
  faSwimmer
} from "@fortawesome/free-solid-svg-icons";

library.add(faRunning, faBicycle, faSwimmer);

const LastFiveActivities = props => {
  return (
    <div className="lastFiveActivities">
      <h5>Dernières activités participés</h5>
      {props.activities.slice(0, 5).map((activity, index) => (
        <div className="lastActivity" key={index}>
          <p>
            <FontAwesomeIcon
              className="mr-1"
              style={{ minWidth: "20px" }}
              icon={`${
                activity.sport_name === "velo"
                  ? "bicycle"
                  : activity.sport_name === "natation"
                  ? "swimmer"
                  : activity.sport_name
              }`}
            />
            {formatDate(activity.activity_start_time)} -
            {activity.activity_title}
          </p>
          <Button>
            <Link to={`/ActivityDetail/${activity.activity_id}`}>Voir</Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default LastFiveActivities;