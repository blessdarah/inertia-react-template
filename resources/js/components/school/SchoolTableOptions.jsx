import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { Button, message, Space, Tooltip } from "antd";
import React from "react";
import { useUtils } from "../../hooks/utils-hook";

const SchoolTableOptions = ({ record }) => {
    const { errors } = usePage().props;
    const { isEmpty } = useUtils();

    const onDelete = () => {
        Inertia.delete(`schools/${record.id}/edit`);
        if (!isEmpty(errors)) {
            message.error("Could not delete request");
        } else {
            message.success("Deleted successfully");
        }
    };

    const onEdit = () => {
        Inertia.get(`schools/${record.id}/edit`);
    };

    return (
        <>
            <Space>
                <Tooltip placement="topRight" title="View">
                    <Button onClick={onEdit} icon={<EditOutlined />}></Button>
                </Tooltip>
                <Tooltip placement="topRight" title="Delete">
                    <Button
                        onClick={onDelete}
                        icon={<DeleteOutlined />}
                        type="primary"
                        danger
                    ></Button>
                </Tooltip>
            </Space>
        </>
    );
};

export default SchoolTableOptions;
