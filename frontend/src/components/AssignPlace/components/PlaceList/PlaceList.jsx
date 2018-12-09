import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import { PlaceAction, AssignmentAction } from 'actions';
import { ApiService } from 'services';

import ButtonAssign from './ButtonAssign'

class AssignPlace extends Component {

    constructor(props) {
        // Inherit constructor
        super(props);

        this.loadPlaces();
        // Bind functions
        this.onClickAssignment = this.onClickAssignment.bind(this);
    }

    loadPlaces() {
        const { setListPlaces } = this.props;

        // Send a request to API (blockchain) to get the current logged in user
        return ApiService.getPlaces()
            // If the server return an account
            .then(list => {
                setListPlaces({ listPlaces: list });
            })
            // To ignore 401 console error
            .catch((err) => { console.error(err) });
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

    onClickAssignment(placeKey) {

        const { setListAssignment, user: { account } } = this.props;

        return ApiService.newAssign(account, placeKey).then(() => {
            ApiService.getAssignments().then(listAPI => {
                setListAssignment({ listAssignments: listAPI });
                this.setListPlace(0);
            }).catch((err) => { console.error(err) });
        });
    }

    render() {
        // Extract data and event functions from props
        const { places: { listPlaces } } = this.props;

        const Places = listPlaces.map(place => (
            <TableRow key={place.placeKey}>
                <TableCell component="th" scope="row">
                    {place.country}
                </TableCell>
                <TableCell component="th" scope="row">
                    {place.zipCode}
                </TableCell>
                <TableCell>
                    <ButtonAssign
                        onAssignClick={this.onClickAssignment}
                        value={place.placeKey}
                    />
                </TableCell>
            </TableRow>
        ))

        return (
            <Paper >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Country</TableCell>
                            <TableCell>Zip Code</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Places}
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
    setListPlaces: PlaceAction.setListPlaces,
    setPlaceOfAssignment: AssignmentAction.setPlaceOfAssignment,
    setListAssignment: AssignmentAction.setListAssignment,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(AssignPlace);