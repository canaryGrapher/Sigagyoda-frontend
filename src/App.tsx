import { Fragment, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/bootstrap.min.css';

// importing components
import Login from './pages/Login';

function App() {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Login />} />
                {/* <Route path="/technician" element={Technician} />
                <Route path="/receptionist" element={Receptionist} /> */}
            </Routes>
        </Fragment>
    );
}

export default App;
