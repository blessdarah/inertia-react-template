import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { Button, message, Space, Tooltip } from "antd";
import React from "react";
import { useUtils } from "../../hooks/utils-hook";

const BookRequestTableOptions = ({ record }) => {
    const { errors } = usePage().props;
    const { isEmpty } = useUtils();

    const onDelete = () => {
        Inertia.delete(`book-requests/${record.id}`);
        if (!isEmpty(errors)) {
            console.log("errors: ", errors);
            message.error("Could not delete request");
        } else {
            message.success("Deleted successfully");
        }
    };

    const onEdit = () => {
        console.log("record: ", record);
        Inertia.get(`book-requests/${record.id}/edit`);
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

export default BookRequestTableOptions;
