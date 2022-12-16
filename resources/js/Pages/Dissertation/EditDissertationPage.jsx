import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import { FORM_MODE } from "../../components/constants";
import DissertationForm from "../../components/dissertation/DissertationForm";
import AppShell from "../../layouts/app-shell";

const EditDissertationPage = ({ dissertation, schools, departments }) => {
    console.log("image: ", dissertation);
    return (
        <Row>
            <div>
                <img src={dissertation.cover_page} alt={dissertation.title} />
            </div>
            <Col md={16} offset={4}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: "1rem 0",
                    }}
                >
                    <h3>Edit dissertation</h3>
                    <Button icon={<ArrowLeftOutlined />}>back</Button>
                </div>
                <DissertationForm
                    schools={schools}
                    departments={departments}
                    dissertation={dissertation}
                    mode={FORM_MODE.EDIT}
                />
            </Col>
        </Row>
    );
};

EditDissertationPage.layout = (page) => <AppShell children={page} />;
export default EditDissertationPage;
