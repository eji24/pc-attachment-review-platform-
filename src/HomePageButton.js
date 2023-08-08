import React from 'react';

const HomePageButton = () => {
    const handleButtonClick = () => {
        // Redirect to home page.
        console.log('Redirecting to home...');
    };

    return (
        <button onClick={handleButtonClick} className="back-home-btn">Home</button>
    );
};

export default HomePageButton;
