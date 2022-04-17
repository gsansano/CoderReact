import React from 'react'
import { Link } from 'react-router-dom'
import "../../App.css"

function Item({ prod }) {

    return (
        <div
            key={prod.id}
            className='col-md-10'
        >
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.title} - ${prod.categoryId}`}
                </div>
                <div className="card-body">
                    <img src={prod.image} alt='' className='w-50' />
                </div>
                <div className='card-price'>Valor: ${prod.price}</div>
                <div className="card-footer">
                    <Link to={`/detalle/${prod.id}`}>
                        <button className="btn btn-outline-secondary btn-block">
                            Detalle del servicio
                        </button>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default Item