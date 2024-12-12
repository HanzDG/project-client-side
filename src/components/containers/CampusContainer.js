/*==================================================
CampusContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk, deleteCampusThunk, unenrollThunk } from "../../store/thunks"; // Import editCampusThunk
import { CampusView } from "../views";

class CampusContainer extends Component {
  // Get the specific campus data from back-end database
  componentDidMount() {
    // Get campus ID from URL (API link)
    this.props.fetchCampus(this.props.match.params.id);
  }

  // Render a Campus view by passing campus data as props to the corresponding View component
  render() {
    return (
      <div>
        <Header />
        <CampusView 
          campus={this.props.campus} 
          editCampus={this.props.editCampus} // Pass editCampus as a prop
          deleteCampus={this.props.deleteCampusThunk} // Pass deleteCampusThunk as
          unenroll={this.props.unenrollThunk} // Pass unenrollThunk as a prop
        />
      </div>
    );
  }
}

// Map Redux state to component props
const mapState = (state) => {
  return {
    campus: state.campus, // Get the State object from Reducer "campus"
  };
};

// Map Redux dispatch to component props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (campus) => dispatch(editCampusThunk(campus)), // Add editCampusThunk
    deleteCampusThunk: (id) => dispatch(deleteCampusThunk(id)),
    unenrollThunk: (studentId, id) => dispatch(unenrollThunk(studentId, id)), // Add unenrollThunk
  };
};

// Export store-connected container by default
export default connect(mapState, mapDispatch)(CampusContainer);
