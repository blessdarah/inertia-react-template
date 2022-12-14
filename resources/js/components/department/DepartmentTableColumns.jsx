import DepartmentTableOptions from "./departmentTableOptions";
import React from "react";

export const departmentTableColumns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
        sortable: true,
    },
    {
        title: "Options",
        dataIndex: "id",
        key: "id",
        render: (_, row) => <DepartmentTableOptions record={row} />,
    },
];
