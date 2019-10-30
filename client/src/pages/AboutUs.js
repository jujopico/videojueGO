import React from 'react';

const AboutUs = () => {
    return (
        <>
        <div className="students-container">
            <h1>Meet the Students!</h1>
            <div className="student-categories">
                <label htmlFor="developers">Developers</label>
                <ul>
                    <li>Brendan Guralsky</li>
                    <li>Daniel A Perez</li>
                    <li>Jennifer Jordan</li>
                    <li>Jun Su</li>
                </ul>
                <label htmlFor="desingers">Designers</label>
                <ul>
                    <li>Brittany DeVries</li>
                    <li>Karen Molina</li>
                </ul>
            </div>
        </div>
    )
  }

  export default AboutUs 