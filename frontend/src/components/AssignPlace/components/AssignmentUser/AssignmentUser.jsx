import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { AssignmentAction } from 'actions';
import { ApiService } from 'services';

import ButtonLeave from './ButtonLeave';

class AssignmentUser extends Component {

    constructor(props) {
        // Inherit constructor
        super(props);

        this.loadAssignments();

        // Bind functions
        this.clickLeaveButton = this.clickLeaveButton.bind(this);
    }

    setListPlace(index) {
        const { setPlaceOfAssignment, assignments: { listAssignments } } = this.props;
        if (listAssignments.length > index) {
            ApiService.getPlace(listAssignments[index].placeKey).then(place => {
                setPlaceOfAssignment({ listAssignments: listAssignments, assignmentKey: listAssignments[index].assignmentKey, place: place });
                this.setListPlace(index + 1);
            }).catch((err) => { console.error(err) });
        }
    }

    loadAssignments() {
        const { setListAssignment } = this.props;

        return ApiService.getAssignmentsByUser().then(listAPI => {
            setListAssignment({ listAssignments: listAPI });
            this.setListPlace(0);
        }).catch((err) => { console.error(err) });
    }

    clickLeaveButton(assignmentKey) {
        const { setAssignment, assignments: { listAssignments }, scatter: { scatter } } = this.props;

        return ApiService.endAssign(assignmentKey, scatter).then(() => {
            ApiService.getAssignmentByKey().then(assign => {
                console.log(assign)
                setAssignment({ listAssignments: listAssignments, assignment: assign });
            }).catch((err) => { console.error(err) });
        });
    }

    render() {
        const { assignments: { listAssignments } } = this.props;

        const Assignments = listAssignments.map(assign => (
            <TableRow key={assign.assignmentKey}>
                <TableCell component="th" scope="row">
                    {assign.place.country}
                </TableCell>
                <TableCell component="th" scope="row">
                    {assign.place.zipCode}
                </TableCell>
                {assign.endAssignment.getTime() === 0 &&
                    <TableCell>
                        <ButtonLeave
                            value={assign.assignmentKey}
                            onLeaveClick={this.clickLeaveButton}
                        />
                    </TableCell>
                }
                {assign.endAssignment.getTime() !== 0 &&
                    <TableCell>
                        {assign.endAssignment.toDateString()}
                    </TableCell>}

            </TableRow>
        ))

        return (
            <Paper >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Country</TableCell>
                            <TableCell>Zip Code</TableCell>
                            <TableCell>End Assignment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Assignments}
                    </TableBody>
                </Table>
            </Paper >
        )
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
    setListAssignment: AssignmentAction.setListAssignment,
    setPlaceOfAssignment: AssignmentAction.setPlaceOfAssignment,
    setAssignment: AssignmentAction.setAssignment,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(AssignmentUser);