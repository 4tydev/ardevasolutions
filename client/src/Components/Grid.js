import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Clients from './Clients'
import Developers from './Developers'
import Sidebar from './Sidebar'
import Solutions from './Solutions'
import Technologies from './Technologies'

const Grid = () => {
    return (
        <div>
            <Router>
                <Row>
                    <Sidebar />
                    <Col>
                        <Switch>
                            <Route path='/clients'>
                                <Clients/>
                            </Route>
                            <Route path='/Developers'>
                                <Developers/>
                            </Route>
                            <Route path='/solutions'>
                                <Solutions />
                            </Route>
                            <Route path='/technologies'>
                                <Technologies/>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Router>

        </div>
    )
}

export default Grid
