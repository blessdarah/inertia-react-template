import { SearchOutlined } from "@ant-design/icons";
import { Card, Empty, Input, Table } from "antd";
import React, { useState } from "react";
import { dissertationTableColumns } from "./DissertationTableColumns";

const DissertationTable = ({ dissertations }) => {
    const [filteredData, setFilteredData] = useState(dissertations);

    const handleSearch = (e) => {
        const value = e.target.value;
        const result =
            value !== ""
                ? dissertations.filter(
                      (item) =>
                          item.title.toLowerCase().includes(value) ||
                          item.author.toLowerCase().includes(value) ||
                          item.school.name.toLowerCase().includes(value) ||
                          item.department.name.toLowerCase().includes(value)
                  )
                : dissertations;
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
                    columns={dissertationTableColumns}
                />
            ) : (
                <Empty description="No dissertation available" />
            )}
        </Card>
    );
};

export default DissertationTable;
