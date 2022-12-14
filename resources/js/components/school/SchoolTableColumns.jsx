import SchoolTableOptions from "./SchoolTableOptions";
import React from "react";

export const schoolTableColumns = [
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
        render: (_, row) => <SchoolTableOptions record={row} />,
    },
];
