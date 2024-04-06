import React from 'react'
import App from './App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MasterContext from './Context/MasterDataContext';
const MasterApp = () => {
    return (
        <MasterContext>
            <Router>
                <Routes>
                    <Route Component={App} path='/' ></Route>
                    <Route Component={App} path='/:productType' ></Route>
                </Routes>
            </Router>
        </MasterContext>
    )
}

export default MasterApp