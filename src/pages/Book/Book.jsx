import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ singleBook }) => {
    // const data = use(bookPromise);
    // console.log(data);

    const {bookName, author, image, rating, category, tags} = singleBook
    return (
        <div className="card bg-base-100 shadow-sm border p-6 ">
            <figure className='p-3 bg-gray-100 '>
                <img className='h-[166px]'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
                </div>
            </div>
        </div>
    );
};

export default Book;