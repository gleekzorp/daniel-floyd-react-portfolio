import React from 'react';
import profilePicture from '../../../static/assets/images/bio/dan_flying.jpg';

export default function() {
    return (
        <div className="content-page-wrapper">
            <div
            className="left-column"
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
            <div className="right-column">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi nam totam saepe aperiam et ut est itaque, ex cupiditate quam corrupti illo porro dignissimos odit ad corporis tenetur deleniti voluptate!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi nam totam saepe aperiam et ut est itaque, ex cupiditate quam corrupti illo porro dignissimos odit ad corporis tenetur deleniti voluptate!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi nam totam saepe aperiam et ut est itaque, ex cupiditate quam corrupti illo porro dignissimos odit ad corporis tenetur deleniti voluptate!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi nam totam saepe aperiam et ut est itaque, ex cupiditate quam corrupti illo porro dignissimos odit ad corporis tenetur deleniti voluptate!
            </div>
        </div>
    );
}