import { Tag } from 'antd';
import React from 'react'
import BookRequestTableOptions from "./book-request-table-options";

const status = {
    "pending": "orange",
    "resolved": "green",
    "other": "blue"
};

export const bookRequestTableColumns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "By",
    dataIndex: "student_email",
    key: "student_email",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, row) => <Tag color={status[row.status]}>{row.status}</Tag>
  },
  {
    title: "Options",
    dataIndex: "id",
      key: "id",
    render: (_, row) => <BookRequestTableOptions record={row} />
  }
];


