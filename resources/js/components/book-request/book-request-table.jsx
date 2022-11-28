import React from 'react'
import { Table, Empty } from 'antd'
import { bookRequestTableColumns } from './book-request-table-columns'

const BookRequestTable = ({bookRequests}) => {
    return (
        <>
            {Array.isArray(bookRequests) && bookRequests.length > 0 ?
                (<Table
                  size="small"
                  rowKey="id"
                  dataSource={bookRequests}
                  columns={bookRequestTableColumns}
                />) :
                <Empty description="No booking request at the moment" />
            }
        </>
    )
}

export default BookRequestTable
