import React, { useState } from 'react';
import './dashboard.css';
import widgetData from '../widgetData.json';
import AddWidget from './../addWidget/addWidget';
import Search from '../Search/Search.jsx';
import WidgetsGrid from '../widgetsGrid/widgetsGrid'



const Dashboard = () => {
    const [categories, setCategories] = useState(widgetData);
    const [searchTerm, setSearchTerm] = useState('');

    const removeWidget = (categoryId, widgetId) => {
        const category = categories.find((category) => category.category === categoryId);
        if (category) {
            setCategories(
                categories.map((category) => {
                    if (category.category === categoryId) {
                        category.widgets = category.widgets.filter((widget) => widget.id !== widgetId);
                    }
                    return category;
                })
            );
        }
    };



    const addWidget = (categoryId, heading, description) => {
        const category = categories.find((category) => category.category === categoryId);
        if (category) {
            const newWidget = {
                id: category.widgets.length + 1,
                title: heading,
                description: description,
            };
            setCategories(
                categories.map((category) => {
                    if (category.category === categoryId) {
                        category.widgets = [...category.widgets, newWidget];
                    }
                    return category;
                })
            );
        }
    };

    const handleSearch = (event) => {
        const newSearchTerm = event.target.value.toLowerCase();
        setSearchTerm(newSearchTerm);
    };

    const filteredCategories = categories.map((category) => {
        const filteredWidgets = category.widgets.filter((widget) =>
            widget.title.toLowerCase().includes(searchTerm) ||
            widget.description.toLowerCase().includes(searchTerm)
        );
        return { ...category, widgets: filteredWidgets };
    });

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>CNAPP Dashboard</h1>
                <div className='header-actions'>
                    <Search onSearch={handleSearch} />
                    <div className='addWidget-container'>
                        <AddWidget onAdd={addWidget} categories={categories} />
                    </div>
                </div>
            </div>
            {filteredCategories.map((category) => (
                <div key={category.category}>
                    <h2>{category.category}</h2>
                    <WidgetsGrid widgets={category.widgets} onRemove={(widgetId) => removeWidget(category.category, widgetId)} />
                </div>
            ))}
        </div>
    );
};

export default Dashboard;







