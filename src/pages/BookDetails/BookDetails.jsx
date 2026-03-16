import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredDb } from '../../utility/addToDb';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
    const { id } = useParams();
    const bookid = parseInt(id)
    const data = useLoaderData();
    const singleData = data.find(book => book.bookId === bookid)
    const { bookId, bookName, author, image, rating, category, tags, yearOfPublishing } = singleData

    const handleMarkAsRead = (id) => {
        // Swal.fire({
        //     title: "Good job!",
        //     text: "You clicked the button!",
        //     icon: "success"
        // });
        toast("Wow so easy!");
        addToStoredDb(id);
    }

    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h2>{bookName}</h2>
             <ToastContainer />
            <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-accent mr-2 mb-5">Mark as Read</button>
            <button className="btn btn-info mr-2 mb-5">Add To Wishlist</button>
        </div>
    );
};

export default BookDetails;