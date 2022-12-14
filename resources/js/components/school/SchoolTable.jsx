import React from "react";
import { Table, Empty } from "antd";
import { schoolTableColumns } from "./SchoolTableColumns";

const SchoolTable = ({ schools }) => {
    return (
        <>
            {Array.isArray(schools) && schools.length > 0 ? (
                <Table
                    size="small"
                    rowKey="id"
                    scroll={{ x: "800px" }}
                    dataSource={schools}
                    columns={schoolTableColumns}
                />
            ) : (
                <Empty description="No school available" />
            )}
        </>
    );
};

export default SchoolTable;
