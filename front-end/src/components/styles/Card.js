import styled from 'styled-components';

export default styled.div`
    width: 28%;
    /* height: 40%; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 3px solid #faf189;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #0A2239;
    margin: 25px 0;
    padding: 5px 0;
    color: #FAF189;
    text-decoration: none;

    h2 {
        color: #FAF189;
    }

    a {
        text-decoration: none;
    }

    img {
        width: 95%; /** originally 200px squeezed border out of view **/
        height: 200px;
        border-radius: 5px;

    }

    h3 {
        font-size: 1.8em;
    }

    
`