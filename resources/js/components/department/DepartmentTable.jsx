import React, { useState } from "react";
import { Table, Empty, Card, Input } from "antd";
import { departmentTableColumns } from "./departmentTableColumns";
import { SearchOutlined } from "@ant-design/icons";

const DepartmentTable = ({ departments }) => {
    const [filteredData, setFilteredData] = useState(departments);

    const handleSearch = (e) => {
        const value = e.target.value;
        const result =
            value !== ""
                ? departments.filter((item) =>
                      item.name.toLowerCase().includes(value)
                  )
                : departments;
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
                    columns={departmentTableColumns}
                />
            ) : (
                <Empty description="No department available" />
            )}
        </Card>
    );
};

export default DepartmentTable;
