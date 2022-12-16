import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import DissertationTable from "../../components/dissertation/DissertationTable";
import DissertationForm from "../../components/dissertation/DissertationForm";
import { useAppModal } from "../../hooks/app-modal";
import AppShell from "../../layouts/app-shell";

const EditDissertationPage = ({ dissertations, schools, departments }) => {
    const { setContent, setWidth, setTitle, setShow } = useAppModal();

    const handleClick = () => {
        setWidth("45rem");
        setTitle("Create new dissertation");
        setContent(
            <DissertationForm schools={schools} departments={departments} />
        );
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
                <h3>Facultites / dissertations</h3>
                <Button onClick={handleClick} icon={<PlusOutlined />}>
                    Add dissertation
                </Button>
            </div>
            <DissertationTable dissertations={dissertations} />
        </div>
    );
};

EditDissertationPage.layout = (page) => <AppShell children={page} />;

export default EditDissertationPage;
