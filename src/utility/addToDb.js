const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem('readList');
    if (storedBookSTR) {
        const storedBooks = JSON.parse(storedBookSTR);
        return storedBooks
    }
    else {
        return []
    }
}

const addToStoredDb = (id) => {
    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        alert('This book is already exist');
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readList', data)
    }
}

export {addToStoredDb};