import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            
            <div
                className="journal__entry-picture"
                style={{ 
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2021/07/15/10/47/cat-6468112_960_720.jpg)' 
                 }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Cupidatat amet proident ex esse dolor tempor ut et Lorem proident ullamco duis.
                </p>
            </div>
            <div className="journal__date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
