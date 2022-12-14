import React from "react";
import { Table, Empty } from "antd";
import { departmentTableColumns } from "./departmentTableColumns";

const DepartmentTable = ({ departments }) => {
    return (
        <>
            {Array.isArray(departments) && departments.length > 0 ? (
                <Table
                    size="small"
                    rowKey="id"
                    scroll={{ x: "800px" }}
                    dataSource={departments}
                    columns={departmentTableColumns}
                />
            ) : (
                <Empty description="No department available" />
            )}
        </>
    );
};

export default DepartmentTable;
