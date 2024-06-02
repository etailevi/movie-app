import React, { useEffect, useState } from 'react'

export function MovieFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value } = target
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, title: value }))
    }

    const { title } = filterBy
    return (
        <div className='movie-filter'>
            <input type="search" value={title} onChange={handleChange} placeholder='Filter by title' />
        </div>
    )
}
