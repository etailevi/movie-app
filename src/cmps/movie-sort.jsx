import React, { useEffect } from 'react'

export function MovieSort({ onSetSort }) {

    function handleChange({ target }) {
        const { value } = target
        onSetSort(value)
    }

    return (
        <div className='movie-sort'>
            <select onChange={handleChange}>
                <option value="">Sort By</option>
                <option value="title-asc">A-Z</option>
                <option value="title-desc">Z-A</option>
                <option value="popularity-desc">Most Popular</option>
                <option value="release-date">Release Date</option>
            </select>
        </div>
    )
}
