import React from 'react';
import './filter.css';

const filter = () => {
    return (
        <div className="d-flex justify-content-between my-5">
            <div className="row">
                <h2>Filtro</h2> <span className="ml-2 mt-2 pt-1">(123 Products)</span>
            </div>
            <select className="form-control filter">
                <option value="">Filter</option>
                <option value="">William mka</option>
                <option value="">William mkon</option>
                <option value="">William bobo</option>
            </select>
        </div>
    );
}

export default filter;