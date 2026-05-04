import { createContext, useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {

    const [modalProps, setModalProps] = useState(null);
    const modalRef = useRef();

    const showModal = ({ title, description, additionalDescription, confirmText = 'Submit', cancelText = 'Cancel', isConfirmation = false, customButtons = [], onClose = null, modalSize = 'default' }) => {
        return new Promise((resolve) => {
            setModalProps({
                title,
                description,
                additionalDescription,
                confirmText,
                cancelText,
                isConfirmation,
                customButtons,
                onClose,
                modalSize,
                onConfirm: () => {
                    resolve(true);
                    onClose?.();
                    setModalProps(null);
                },
                onCancel: () => {
                    resolve(false);
                    onClose?.();
                    setModalProps(null);
                },
                onClose
            })
        })
    }

    return (
        <ModalContext.Provider value={{ showModal }}>
            {children}
            {
                modalProps && createPortal(
                    <div className=" fixed inset-0 flex justify-center z-50 bg-navyNeutral-600/50 backdrop-blur-sm">
                        <div
                            className={`bg-white px-6 py-10 shadow-lg h-fit rounded-xl ${modalProps.modalSize === 'large'
                                ? 'w-11/12 max-w-7xl mt-8 max-h-screen overflow-y-auto'
                                : modalProps.modalSize === 'medium'
                                    ? 'w-2/3 max-w-4xl mt-16'
                                    : 'w-1/3 mt-32'
                                }`}
                            ref={modalRef}
                        >
                            <h2 className="!text-2xl !font-ManulifeBold">{modalProps.title}</h2>
                            <div className="!text-lg">{modalProps.description}</div>
                            {modalProps.additionalDescription && (
                                <p className="!text-lg mt-5">{modalProps.additionalDescription}</p>
                            )}
                            <div className="flex justify-end gap-3 mt-10">
                                {modalProps.customButtons && modalProps.customButtons.map((button, index) => (
                                    <button
                                        key={index}
                                        className={button.className}
                                        onClick={() => {
                                            button.onClick?.();
                                        }}
                                    >
                                        {button.text}
                                    </button>
                                ))}
                                {
                                    modalProps.isConfirmation && (
                                        <button onClick={modalProps.onCancel}>{modalProps.cancelText}</button>
                                    )
                                }
                                <button onClick={modalProps.onConfirm}>{modalProps.confirmText}</button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )
            }
        </ModalContext.Provider>
    )
}

export default ModalProvider;