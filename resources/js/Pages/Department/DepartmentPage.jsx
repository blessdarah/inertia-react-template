import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import DepartmentForm from "../../components/department/DepartmentForm";
import DepartmentTable from "../../components/department/DepartmentTable";
import { useAppModal } from "../../hooks/app-modal";
import AppShell from "../../layouts/app-shell";

const DepartmentPage = ({ departments, schools }) => {
    const { setContent, setTitle, setShow } = useAppModal();

    const handleClick = () => {
        setTitle("Create new department");
        setContent(<DepartmentForm schools={schools} />);
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
                <h3>Departments</h3>
                <Button onClick={handleClick} icon={<PlusOutlined />}>
                    Add department
                </Button>
            </div>
            <DepartmentTable departments={departments} />
        </div>
    );
};

DepartmentPage.layout = (page) => <AppShell children={page} />;

export default DepartmentPage;
