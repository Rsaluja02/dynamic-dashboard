import React, { useState } from 'react';
import './addWidget.css';

const AddWidget = ({ onAdd, categories }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [categoryId, setCategoryId] = useState('');
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');

    const handleCategoryIdChange = (event) => {
        setCategoryId(event.target.value);
    };

    const handleHeadingChange = (event) => {
        setHeading(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleAddWidget = () => {
        if (heading && description) {
            onAdd(categoryId, heading, description);
            setShowMenu(false);
        } else {
            alert('Please fill in both heading and description fields!');
        }
    };

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <button className='addWidget-btn' onClick={() => setShowMenu(true)}>Add Widget</button>
            {showMenu && (
                <div className="menu">
                    <div className="menu-content">
                        <h2>Add Widget</h2>
                        <select value={categoryId} onChange={handleCategoryIdChange}>
                            {categories.map((category) => (
                                <option key={category.category} value={category.category}>
                                    {category.category}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            value={heading}
                            onChange={handleHeadingChange}
                            placeholder="Enter heading"
                        />
                        <input
                            type="text"
                            value={description}
                            onChange={handleDescriptionChange}
                            placeholder="Enter description"
                        />
                        <button onClick={handleAddWidget}>Add Widget</button>
                        <button onClick={handleToggleMenu}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};


export default AddWidget;