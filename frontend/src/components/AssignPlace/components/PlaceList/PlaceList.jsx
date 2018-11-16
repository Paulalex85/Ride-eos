import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import { PlaceAction } from 'actions';
import { ApiService } from 'services';
import { Button } from '@material-ui/core';

class AssignPlace extends Component {

    constructor(props) {
        // Inherit constructor
        super(props);

        this.loadPlaces();
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
            .catch(() => { })
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
                    <Button
                        className="green"
                        variant='contained'
                        color='primary'>
                        ASSIGN
                    </Button>
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
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(AssignPlace);