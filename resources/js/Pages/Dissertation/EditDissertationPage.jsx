import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import SchoolForm from "../../components/school/SchoolForm";
import SchoolTable from "../../components/school/SchoolTable";
import { useAppModal } from "../../hooks/app-modal";
import AppShell from "../../layouts/app-shell";

const EditDissertationPage = ({ schools }) => {
    const { setContent, setTitle, setShow } = useAppModal();

    const handleClick = () => {
        setTitle("Create new school");
        setContent(<SchoolForm />);
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
                <h3>Facultites / Schools</h3>
                <Button onClick={handleClick} icon={<PlusOutlined />}>
                    Add school
                </Button>
            </div>
            <SchoolTable schools={schools} />
        </div>
    );
};

EditDissertationPage.layout = (page) => <AppShell children={page} />;

export default EditDissertationPage;
