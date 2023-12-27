import styled from 'styled-components'

const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #0000007d;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    padding: 50px 50px;
    background: white;
    border-radius: 10px;
    position: relative;
`;

const Close = styled.span`
    position: absolute;
    right: 5px;
    top: 5px;
    background: red;
    height: 15px;
    width: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dadada;
    border-radius: 50px;
    
    &:after {
        content: 'x';
        font-size: 12px;
        line-height: 15px;
    }
`;

export const Modal = (props) => {

    const contentComponentClickHandle = (event) => {
        event.stopPropagation();
    }

    return (
        <Backdrop onClick={props.close}>
            <Content onClick={contentComponentClickHandle}>
                <Close onClick={props.close}/>
                {props.children}
            </Content>
        </Backdrop>
    )
}