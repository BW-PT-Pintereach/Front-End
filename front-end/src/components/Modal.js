import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import FormikAddEdit from './AddEdit'

const Modal = (props) => {
    const article = props.location.article;
    const method = props.match.params.method;
    return (
        <div>
            <FormikAddEdit article={article} method={`${method[0].toUpperCase()}${method.slice(1)}`} />
        </div>
    )
}

export default Modal