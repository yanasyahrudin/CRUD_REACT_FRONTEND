import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Itemlist = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getItems()
    }, [])

    const getItems = async () => {
        const response = await axios.get('http://localhost:5000/items')
        setItems(response.data)
    }

    const deleteItem = async (itemId) => {
        await axios.delete(`http://localhost:5000/items/${itemId}`)
        getItems()
    }

    return (
        <div>
            <h1 className='title'>Items</h1>
            <h2 className='subtitle'>List of Items</h2>
            <Link to="/items/add" className='button is-primary mb-2'>Add New</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Created By</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={item.uuid}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.user.name}</td>
                            <td>
                                <Link to={`/items/edit/${item.uuid}`} className="button is-small is-info">Edit</Link>
                                <button onClick={() => deleteItem(item.uuid)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Itemlist