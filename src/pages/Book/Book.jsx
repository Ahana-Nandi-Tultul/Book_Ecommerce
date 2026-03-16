import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    // const data = use(bookPromise);
    // console.log(data);

    const { bookId, bookName, author, image, rating, category, tags, yearOfPublishing } = book
    return (
        <Link to={`/bookDetail/${bookId}`}>
        <div className="card bg-base-100 shadow-sm border p-6 ">
            <figure className='p-3 bg-gray-100 '>
                <img className='h-[166px]'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex justify-center gap-2'>
                    {
                        tags.map((tag, index) => <button key={index}>{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p>Book By: {author}</p>
                <div className='border border-dashed my-4'></div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;