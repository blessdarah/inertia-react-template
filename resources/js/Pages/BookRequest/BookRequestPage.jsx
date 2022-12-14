import { Button } from "antd";
import React from "react";
import BookRequestForm from "../../components/book-request/book-request-form";
import BookRequestTable from "../../components/book-request/book-request-table";
import { useAppModal } from "../../hooks/app-modal";
import AppShell from "../../layouts/app-shell";
import { emptyBookRequest } from "../../models/emptyModels";

const BookRequestPage = ({ bookRequests }) => {
    const { setContent, setTitle, setShow } = useAppModal();

    const handleClick = () => {
        setTitle("Create book request");
        setContent(<BookRequestForm bookRequest={emptyBookRequest} />);
        setShow(true);
    };

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "1rem 0",
                }}
            >
                <h3>Book request</h3>
                <Button onClick={handleClick}>New request</Button>
            </div>
            <BookRequestTable bookRequests={bookRequests} />
        </div>
    );
};

BookRequestPage.layout = (page) => <AppShell children={page} />;

export default BookRequestPage;
