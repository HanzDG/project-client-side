import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, editStudentThunk, deleteStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";

class StudentContainer extends Component {
  // Get student data from back-end database
  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  // Render Student view by passing student data as props to the corresponding View component
  render() {
    return (
      <div>
        <Header />
        {/* Pass editStudent as a prop to StudentView */}
        <StudentView 
          student={this.props.student} 
          editStudent={this.props.editStudent}
          deleteStudent={this.props.deleteStudent}
        />
      </div>
    );
  }
}

// Map Redux state to component props
const mapState = (state) => {
  return {
    student: state.student,  // Get the State object from Reducer "student"
  };
};

// Map Redux dispatch to component props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student)), // Add editStudentThunk here
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
  };
};

// Export store-connected container by default
export default connect(mapState, mapDispatch)(StudentContainer);
