import React, { useContext } from 'react';
import Context from '../context/context';

const BookList = () => {
    const {search, setsearch, loading, setloading, result, setresult} = useContext(Context);
    return (
        <div>
            
        </div>
    );
}

export default BookList;
