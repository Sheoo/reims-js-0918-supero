import { connect } from "react-redux";
import {
  activityDetailReceivedAction,
  fetchActivityDetailAction,
  connectedUserActivitiesReceivedAction
} from "../actions/actions";
import ActivityDetail from "../ActivityDetail";

const mapStateToProps = state => ({
  activityDetail: state.activityDetail,
  loading: state.loading,
  userActivities: state.userActivities
});

const mapDispatchToProps = dispatch => ({
  activityDetailReceived: activity =>
    dispatch(activityDetailReceivedAction(activity)),
  fetchActivity: () => dispatch(fetchActivityDetailAction()),
  getUserActivities: userActivities =>
    dispatch(connectedUserActivitiesReceivedAction(userActivities))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityDetail);
