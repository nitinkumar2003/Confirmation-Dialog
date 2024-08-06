import React from 'react'
import ReactDom from 'react-dom/client'
import ConfirmDialog from './ConfirmDialog';


let resolveCallback;

const $confirm = ({ title, message, buttonText }) => {
    return new Promise((resolve) => {
        resolveCallback = resolve;
        showConfirmDialog({ title, message, buttonText })
    })
}


const showConfirmDialog = ({ title, message, buttonText }) => {
    const modalRoot = document.createElement('div');
    modalRoot.id = 'confirm-dialog-root';
    document.body.appendChild(modalRoot);
    const root = ReactDom.createRoot(modalRoot)


    const handleConfirm = () => {
        resolveCallback(true);
        closeConfirmDialog();
    }
    const handleCancel = () => {
        resolveCallback(false);
        closeConfirmDialog()
    }
    const closeConfirmDialog = () => {
        root.unmount();
        document.body.removeChild(modalRoot);
    }

    root.render(
        <ConfirmDialog
            show={true}
            title={title}
            message={message}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            buttonText={buttonText}


        />

    )
}
export default $confirm
