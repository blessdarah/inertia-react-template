import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import { FORM_MODE } from "../../components/constants";
import DepartmentForm from "../../components/department/DepartmentForm";
import AppShell from "../../layouts/app-shell";

const EditDepartmentPage = ({ department, schools }) => {
    return (
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
                    <h3>Edit department</h3>
                    <Button icon={<ArrowLeftOutlined />}>back</Button>
                </div>
                <DepartmentForm
                    department={department}
                    schools={schools}
                    mode={FORM_MODE.EDIT}
                />
            </Col>
        </Row>
    );
};

EditDepartmentPage.layout = (page) => <AppShell children={page} />;
export default EditDepartmentPage;
