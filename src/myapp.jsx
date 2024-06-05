// src/App.js
import React from 'react';
import './MyApp.scss';
import { useNavigate } from 'react-router-dom';

function MyApp() {
    const nav = useNavigate()
    const loginHook = (o) => {
        nav("/login")
    }
    const adminHook = () => {
        nav("/admin")
    }
    return (
        <div className="App">
            <header className="header">
                <h1>Inventory Management App</h1>
            </header>
            <section className="hero">
                <h1>Manage Your Inventory Efficiently</h1>
                <p>Our app helps you keep track of your inventory in real-time, with ease and efficiency.</p>
                <button type="button" onClick={loginHook} value="login">Take me to Login.</button><br />
                <button type="button" onClick={adminHook} value="admin">Take me to Admin Page</button>
            </section>
            <section className="features">
                <div className="feature">
                    <h3>Real-Time Tracking</h3>
                    <p>Monitor your inventory levels and get real-time updates.</p>
                </div>
                <div className="feature">
                    <h3>Detailed Reports</h3>
                    <p>Generate comprehensive reports to analyze your inventory data.</p>
                </div>
                <div className="feature">
                    <h3>Easy Integration</h3>
                    <p>Integrate with your existing systems seamlessly.</p>
                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2024 Inventory Management App. All rights reserved.</p>
            </footer>
        </div >
    );
}

export default MyApp;
