import styled from 'styled-components';

const ArticleDeleteButton = styled.button`
    background: #8E2735;
    color: #FAF189;
    padding: 10px 30px;
    border: 1px solid #8e2735;
    cursor: pointer;
    font-size: 1.2em;
    



    &:hover {
        background-color: rgba(250, 241, 137, 0.5);
        color: #8e2735;
        border: rgba(250, 241, 137, 0.5);
    }
`;

export default ArticleDeleteButton;