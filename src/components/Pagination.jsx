import React from 'react';
import _ from 'lodash';

function Pagination(props) {


    const {itemsCount, pageSize, currentPage} = props;
    const pagesCount=Math.ceil(itemsCount/pageSize);
    console.log("coming from PAGINATION currentPage,pagesCount,itemsCount",currentPage,pagesCount,itemsCount);
    if(pagesCount===1) return null;
    const pages = _.range(1,pagesCount+1);

    return (  
        <nav>
            <ul className="pagination">
                {pages.map(page=>(
                    <li key={page} className={page===currentPage?"page-item active":"page-item"}>
                    <a  className="page-link" onClick={()=>props.onPageChange(page)}>{page}</a>
                </li>
                ))}
            </ul>
        </nav>

    );
}

export default Pagination;