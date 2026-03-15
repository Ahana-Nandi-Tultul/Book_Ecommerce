import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    const [allBooks, setAllBooks] = useState([]);

    // useEffect(()=>{
    //     fetch('./booksData.json')
    //     .then(res => res.json())
    //     .then(data => setAllBooks(data))
    // }, [])

    // const bookPromise = fetch('./booksData.json').then(res => res.json())

    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                <Suspense fallback={<span>Loading...</span>}>
                    {
                        data.map((singleBook, index) => <Book key={index}
                            singleBook={singleBook}></Book>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Books;