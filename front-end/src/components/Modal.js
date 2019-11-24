import React, {useContext} from 'react';
import {CurrentArticleContext} from '../context/CurrentArticleContext';
import FormikAddEdit from './AddEdit'
import ViewArticle from './ViewArticle';

import ModalWrapper from './styles/ModalWrapper';
import ModalDiv from './styles/ModalDiv';
import ModalExitButton from './styles/ModalExitButton';

const Modal = (props) => {
    const [article, setArticle] = useContext(CurrentArticleContext)
    const method = props.match.params.method;
    const viewingArticle = props.location.pathname.split('/').includes('view');
    return (
        <ModalWrapper id="modal-wrapper" onClick={e => window.location = "/"}>
            <ModalDiv onClick={e => e.stopPropagation()}>
                <ModalExitButton onClick={() => window.location = '/'} style={{ alignSelf: 'flex-end' }}>X</ModalExitButton>
                {viewingArticle ? <ViewArticle article={props.location.article} /> : <FormikAddEdit article={article} method={`${method[0].toUpperCase()}${method.slice(1)}`} />}
            </ModalDiv>
        </ModalWrapper>
    )
}

export default Modal;