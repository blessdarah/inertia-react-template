import React, { useState } from "react";
import { Table, Empty, Card, Input } from "antd";
import { bookRequestTableColumns } from "./book-request-table-columns";
import { SearchOutlined } from "@ant-design/icons";

const BookRequestTable = ({ bookRequests }) => {
    const [filteredData, setFilteredData] = useState(bookRequests);

    const handleSearch = (e) => {
        const value = e.target.value;
        const result =
            value !== ""
                ? bookRequests.filter(
                      (item) =>
                          item.title.toLowerCase().includes(value) ||
                          item.student_email.toLowerCase().includes(value)
                  )
                : bookRequests;
        setFilteredData(result);
    };

    return (
        <Card
            size="small"
            extra={
                <Input
                    prefix={<SearchOutlined />}
                    onChange={handleSearch}
                    type="search"
                    placeholder="Filter dissertation"
                />
            }
        >
            {Array.isArray(filteredData) && filteredData.length > 0 ? (
                <Table
                    size="small"
                    rowKey="id"
                    scroll={{ x: "800px" }}
                    dataSource={filteredData}
                    columns={bookRequestTableColumns}
                />
            ) : (
                <Empty description="No booking request at the moment" />
            )}
        </Card>
    );
};

export default BookRequestTable;
