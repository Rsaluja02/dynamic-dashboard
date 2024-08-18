import React from 'react'
import './widgetsGrid.css'

const WidgetsGrid = ({ widgets, onRemove }) => {
    return (
        <div className="widgets-grid">
            {widgets.map((widget) => (
                <div className="widget" key={widget.id}>
                    <button className="remove-widget-btn" onClick={() => onRemove(widget.id)}>✖</button>
                    <h3>{widget.title}</h3>
                    <p>{widget.description}</p>
                </div>
            ))}
        </div>
    );
};

export default WidgetsGrid;
