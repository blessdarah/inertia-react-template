import { ArrowLeftOutlined, BackwardFilled } from "@ant-design/icons";
import { Inertia } from "@inertiajs/inertia";
import { Button, Col, Row } from "antd";
import React from "react";
import BookRequestForm from "../../components/book-request/book-request-form";
import { FORM_MODE } from "../../components/constants";
import AppShell from "../../layouts/app-shell";

const EditBookRequestPage = ({ bookRequest }) => {
    return (
        <AppShell>
            <Row>
                <Col md={16} offset={4}>
                    <h3>Edit book request</h3>
                    <Button icon={<ArrowLeftOutlined />}>back</Button>
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
