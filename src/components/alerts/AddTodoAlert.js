import {useState} from 'react';
import styled from 'styled-components'
import {Modal} from './components/Modal'

const Button = styled.button`
    background-color: #333;
    border-radius: 5px;
    color: #fff;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const AddTodoAlert = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showAlertButtonClick = () => {
        setIsModalVisible(true)
    }

    const closeAlert = () => {
        setIsModalVisible(false);
    }

    const renderModal = () => {
        if (!isModalVisible) {
            return null;
        }

        return (
            <Modal close={closeAlert}>
                <input value={props.value} onChange={props.onChange}/>
                <Button onClick={() => {
                    props.onClick()
                    closeAlert()
                }}>Добавить</Button> 
            </Modal>
        );
    }

    return (
        <>
            {renderModal()}
            <Container>
                <Button onClick={showAlertButtonClick}>Добавить задачу</Button>
            </Container>
        </>
    )
}