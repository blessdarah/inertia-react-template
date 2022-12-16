import { SearchOutlined } from "@ant-design/icons";
import { Card, Empty, Table } from "antd";
import Input from "antd/es/input/Input";
import React, { useState } from "react";
import { schoolTableColumns } from "./SchoolTableColumns";

const SchoolTable = ({ schools }) => {
    const [filteredData, setFilteredData] = useState(schools);

    const handleSearch = (e) => {
        const value = e.target.value;
        const result =
            value !== ""
                ? schools.filter((item) => item.name.includes(value))
                : schools;
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
                    placeholder="Filter schools"
                />
            }
        >
            {Array.isArray(filteredData) && filteredData.length > 0 ? (
                <Table
                    size="small"
                    rowKey="id"
                    scroll={{ x: "800px" }}
                    dataSource={filteredData}
                    columns={schoolTableColumns}
                />
            ) : (
                <Empty description="No school available" />
            )}
        </Card>
    );
};

export default SchoolTable;
