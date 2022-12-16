import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import BookRequestForm from "../../components/book-request/book-request-form";
import { FORM_MODE } from "../../components/constants";
import AppShell from "../../layouts/app-shell";
import {Button, Col, Row} from "antd";

const EditBookRequestPage = ({ bookRequest }) => {
    return (
        <AppShell>
            <Row>
                <Col md={16} offset={4}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            margin: "1rem 0",
                        }}
                    >
                        <h3>Edit book request</h3>
                        <Button icon={<ArrowLeftOutlined />}>back</Button>
                    </div>
                    <BookRequestForm
                        bookRequest={bookRequest}
                        mode={FORM_MODE.EDIT}
                    />
                </Col>
            </Row>
        </AppShell>
    );
};

export default EditBookRequestPage;
