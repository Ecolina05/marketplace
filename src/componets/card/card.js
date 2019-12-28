import React from 'react';
import './card.css';
import product from '../../assets/img/shoes.jpg';
import Modal from '../modal/modal';

const card = () => {
    return (
        <div className="card mr-4">
            <img src={product} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-subtitle">Category</p>
                <p className="card-title mb-1">Product name</p>
                <p className="price text-success text-sm mb-1">$240.000</p><hr/>
                <a href="#" className="card-link text-sm" data-toggle="modal" data-target="#detailsModal">Details <i className="fas fa-plus ml-2"></i></a>
            </div>
            <Modal/>
        </div>
    );
}

export default card;