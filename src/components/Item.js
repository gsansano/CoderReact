import React from 'react'
import { Link } from 'react-router-dom'

function Item({ prod }) {

    return (
        <div
            key={prod.id}
            className='col-md-4'
        >
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.title} - ${prod.categoryId}`}
                </div>
                <div className="card-body">
                    <img src={prod.image} alt='' className='w-50' />
                </div>
                <div>Valor: ${prod.price}</div>
                <div className="card-footer">
                    <Link to={`/detalle/${prod.id}`}>
                        <button className="btn btn-outline-primary btn-block">
                            Detalle del producto
                        </button>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default Item