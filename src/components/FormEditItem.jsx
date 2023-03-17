import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const FormEditItem = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [msg, setMsg] = useState("")
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const getItemById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/items/${id}`)
                setName(response.data.name)
                setPrice(response.data.price)
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg)
                }
            }
        }
        getItemById()
    }, [id])

    const updateItem = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:5000/items/${id}`, {
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
            <h2 className='subtitle'>Update Item</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={updateItem} >
                            <p className='has-text-centered'></p>
                            <div className="field">
                                <label className="label">Item Name</label>
                                <div className="control">
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Item Name' className="input" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Price</label>
                                <div className="control">
                                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price' className="input" />
                                </div>
                            </div>


                            <div className="field ">
                                <div className="control">
                                    <button type='submit' className="button is-success">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormEditItem