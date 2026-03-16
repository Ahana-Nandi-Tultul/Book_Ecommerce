import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDb';
import Book from '../Book/Book';

const ReadList = () => {
    const data = useLoaderData();
    // console.log(data);
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBook = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        setReadList(myReadList);
    }, [data])

    const handleSort = (sortType) => {
        setSort(sortType);
        if(sortType === 'page')
        {
            const sortedBypage = [...readList].sort((a,b) => a.totalPages - b.totalPages);
            setReadList(sortedBypage);

        }
        if(sortType === 'rattings')
        {
            const sortedByRattings = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByRattings);
        }
    }

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sort By : {sort ? sort : ''}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort('page')}>Pages</a></li>
                    <li><a onClick={() => handleSort('rattings')}>Rattings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.map(book => <Book key={book.bookId}
                            book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;