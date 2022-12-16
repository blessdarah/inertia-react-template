import DissertationTableOptions from "./DissertationTableOptions";
import React from "react";

export const dissertationTableColumns = [
    {
        title: "Title",
        dataIndex: "title",
        key: "title",
    },
    {
        title: "Author",
        dataIndex: "author",
        key: "author",
        sorter: {
            compare: (a, b) => a.author > b.author,
        },
    },
    {
        title: "Abstract",
        dataIndex: "abstract",
        key: "abstract",
        render: (_, record) => record.abstract.slice(0, 50) + "...",
    },
    {
        title: "School",
        dataIndex: "school_id",
        key: "school_id",
        render: (_, record) => record.school.name,
        sorter: {
            compare: (a, b) => a.school.name > b.school.name,
        },
    },
    {
        title: "Department",
        dataIndex: "department_id",
        key: "department_id",
        sortable: (a, b) => a.department.name - b.department.name,
        render: (_, record) => record.department.name,
    },
    {
        title: "Options",
        dataIndex: "id",
        key: "id",
        render: (_, row) => <DissertationTableOptions record={row} />,
    },
];
