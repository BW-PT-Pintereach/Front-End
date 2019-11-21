import React, { useState, useEffect } from 'react'
import axiosWithAuth, { getId } from '../utils/axiosWithAuth';
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom';

const AddEdit = (props) => {
    const history = useHistory();
    return (
        <Form>
            {props.touched.title && props.errors.title && <h4>{props.errors.title}</h4>}
            <Field placeholder='Title' name='title' type='text'></Field>
            {props.touched.link && props.errors.link && <h4>{props.errors.link}</h4>}
            <Field placeholder='Link' name='link' /*value={props.article.link}*/ type='text'></Field>
            {props.touched.image && props.errors.image && <h4>{props.errors.image}</h4>}
            <Field placeholder='Image URL' name='image' /*value={props.article.image}*/ type='text'></Field>
            {props.touched.category_name && props.errors.category_name && <h4>{props.errors.category_name}</h4>}
            <Field placeholder='Category' name='category_name' /*value={props.article.category_name}*/ type='text'></Field>
            {props.touched.summary && props.errors.summary && <h4>{props.errors.summary}</h4>}
            <Field placeholder='Summary' name='summary' /*value={props.article.summary}*/ as='textarea'></Field>
            <button>{`${props.method} Article`}</button>
        </Form>
    )
}

// title, summary, link, image, category_name }, 

const FormikAddEdit = withFormik({
    mapPropsToValues(props) {
        return {
            title: props.title || props.article ? props.article.title : '',
            link: props.link || props.article ? props.article.link : '',
            image: props.image || props.article ? props.article.image : '',
            category_name: props.category_name || props.article ? props.article.category_name : '',
            summary: props.summary || props.article ? props.article.summary : '',
            user_id: getId()
        }
    },
    handleSubmit(values, FormikBag) {
        const method = FormikBag.props.method.toLowerCase() === 'add' ? 'post' : 'put'
        console.log(FormikBag)
        if (method === 'post') {
            axiosWithAuth()
                .post('articles', values)
                .then(result => {
                    console.log(result)
                    window.location.replace('/articles')
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (method === 'put') {
            axiosWithAuth()
                .put(`articles/${FormikBag.props.article.id}`, values)
                .then(result => {
                    console.log(result)
                    window.location.replace('/articles');
                })
                .catch(error => {
                    console.log(error)
                })
        }
        console.log(method)
    },
    validationSchema: yup.object().shape({
        title: yup.string().required().max(36, 'Title must be less than 36 characters'),
        link: yup.string().url('Must be a valid URL').required(),
        image: yup.string().url('Must be a valid URL').required(),
        category_name: yup.string().required().max(15, 'Category must be less than 15 characters'),
        summary: yup.string().required().max(280, 'Summary must be less than 280 characters'),
    })
})(AddEdit)

export default FormikAddEdit