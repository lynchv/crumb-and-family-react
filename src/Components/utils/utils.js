import React, { useEffect, useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'


export const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
}


export const PageCount = ({itemTotal, itemsPerPage, onPageClick}) => {

    const [pagination, setPagination] = useState([])
    const [selectedPage, setSelectedPage] = useState(1)

    useEffect(() => {
        const pages = []
        for (let x = 1; x <= Math.ceil(itemTotal / itemsPerPage); x++) {
            pages.push(
                <Pagination.Item
                    key={x}
                    active={ selectedPage === x ? true : false }
                    onClick={() => {setSelectedPage(x); onPageClick(x)}}
                >
                {x}
                </Pagination.Item>
            );
        }
        setPagination(pages)
    }, [itemTotal, itemsPerPage, selectedPage, onPageClick]);

    return (
        <Pagination>{pagination}</Pagination>
    )


}