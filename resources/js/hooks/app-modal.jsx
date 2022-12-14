import { Modal } from "antd";
import React, { useEffect, createContext, useState, useContext } from "react";

const AppModalContext = createContext({});

export const AppModalProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState(null);
    const [width, setWidth] = useState("30rem");
    const [title, setTitle] = useState("Modal title");
    const [handleSave, setHandleSave] = useState();

    useEffect(() => {}, []);
    return (
        <>
            <AppModalContext.Provider
                value={{
                    show,
                    setShow,
                    title,
                    setTitle,
                    content,
                    setContent,
                    width,
                    setWidth,
                    handleSave,
                    setHandleSave,
                }}
            >
                <Modal
                    title={title}
                    open={show}
                    width={width}
                    onOk={handleSave}
                    onCancel={() => setShow(false)}
                    footer={null}
                    maskClosable={false}
                >
                    {content}
                </Modal>
                {children}
            </AppModalContext.Provider>
        </>
    );
};

export const useAppModal = () => useContext(AppModalContext);
