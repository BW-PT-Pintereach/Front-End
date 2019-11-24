import React, {useContext} from 'react'
import {CurrentArticleContext} from '../context/CurrentArticleContext';
import axiosWithAuth, { getId } from '../utils/axiosWithAuth';
import { withFormik, Form, Field, FormikContext } from 'formik'
import * as yup from 'yup'
// import { useHistory } from 'react-router-dom';


import AddEditField from './styles/AddEditField';
import AddEditButton from './styles/AddEditButton';

const AddEdit = (props) => {
    console.log(props);
    // props.article = article;
    // const history = useHistory();
    return (
        <Form>
            {/* <Field name='article' value={article && article}></Field> */}
            {props.touched.title && props.errors.title && <h4>{props.errors.title}</h4>}
            <AddEditField placeholder='Title' name='title' type='text'></AddEditField>
            {props.touched.link && props.errors.link && <h4>{props.errors.link}</h4>}
            <AddEditField placeholder='Link' name='link' /*value={props.article.link}*/ type='text'></AddEditField>
            {props.touched.image && props.errors.image && <h4>{props.errors.image}</h4>}
            <AddEditField placeholder='Image URL' name='image' /*value={props.article.image}*/ type='text'></AddEditField>
            {props.touched.category_name && props.errors.category_name && <h4>{props.errors.category_name}</h4>}
            <AddEditField placeholder='Category' name='category_name' /*value={props.article.category_name}*/ type='text'></AddEditField>
            {props.touched.summary && props.errors.summary && <h4>{props.errors.summary}</h4>}
            <AddEditField placeholder='Summary' name='summary' /*value={props.article.summary}*/ as='textarea'></AddEditField>
            <AddEditButton>{`${props.method} Article`}</AddEditButton>
        </Form>
    )
}

// title, summary, link, image, category_name }, 

const FormikAddEdit = withFormik({
    mapPropsToValues(props) {
        console.log(props);
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
                    window.location = '/'
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (method === 'put') {
            axiosWithAuth()
                .put(`articles/${FormikBag.props.article.id}`, values)
                .then(result => {
                    console.log(result)
                    window.location = '/';
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