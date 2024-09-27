import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';


const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

function App() {
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

   
    const endOffset = itemOffset + itemsPerPage;
    const currentItemsSlice = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
            <h1>Paginated Items</h1>
            <ul>
                {currentItemsSlice.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="active"
            />
        </div>
    );
}

export default App;
