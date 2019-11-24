import styled from 'styled-components';

export default styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 400px;

    input {
        width: 96%;
        margin-bottom: 35px;
        height: 45px;
        font-size: 1.3em;
        text-align: center;
        background: #0A2239;
        color: #FAF189;
    }

    button {
        width: 98%;
        margin-bottom: 35px;
        height: 45px;
        font-size: 1.3em;
        background: #0A2239;
        color: #FAF189;

        &:hover {
            background-color: rgba(250, 241, 137, 0.5);
            color: #0A2239;
            border: 2px solid #0A2239;
    }
`;