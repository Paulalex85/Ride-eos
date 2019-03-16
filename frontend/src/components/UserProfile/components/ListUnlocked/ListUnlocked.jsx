import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Table, Col, Row } from 'react-bootstrap';

import { UnstackPow } from './components'


class ListUnlocked extends Component {

    render() {
        const { stackpower: { listStackpower, stackKeyCurrent } } = this.props;

        const Stacks = listStackpower.map(stack => {
            if (stack.stackKey !== stackKeyCurrent) {
                return <UnstackPow
                    stack={stack}
                    key={stack.stackKey}
                />
            }
            return <div></div>
        })

        return (
            <Row className="justify-content-center">
                <Col md={8}>
                    <h4> List unlocked stackpower</h4>

                    <Table responsive striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Balance</th>
                                <th>End delay</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Stacks}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ListUnlocked);