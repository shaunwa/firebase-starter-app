import React from 'react';
import styled from 'styled-components';
import ModalBase from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        borderRadius: '8px',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
};

const ContentBox = styled.div`
    background-color: #fff;
    padding: 16px;
`;

ModalBase.setAppElement('#root');

export const Modal = ({
    isOpen,
    afterOpenModal = () => {},
    onRequestClose = () => {},
    children,
}) =>
    <ModalBase
        appElement={document.getElementById('root')}
        isOpen={isOpen}
        onAfterOpen={() => {
            document.body.style.overflow = 'hidden';
            afterOpenModal();
        }}
        onRequestClose={() => {
            document.body.style.overflow = 'unset';
            onRequestClose();
        }}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <ContentBox>
            {children}
        </ContentBox>
    </ModalBase>
