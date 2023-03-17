import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormAddItem = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [msg, setMsg] = useState("")
    const navigate = useNavigate()

    const saveItem = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/items', {
                name: name,
                price: price
            })
            navigate("/items")
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg)
            }
        }
    }

    return (
        <div>
            <h1 className='title'>Items</h1>
            <h2 className='subtitle'>Add New Item</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveItem} >
                            <p className='has-text-centered'>{msg}</p>
                            <div className="field">
                                <label className="label">Item Name</label>
                                <div className="control">
                                    <input type="text" placeholder='Item Name' value={name} onChange={(e) => setName(e.target.value)} className="input" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Price</label>
                                <div className="control">
                                    <input type="number" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} className="input" />
                                </div>
                            </div>


                            <div className="field ">
                                <div className="control">
                                    <button type='submit' className="button is-success">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAddItem