import React from 'react'
import { Button, message, Space, Tooltip } from 'antd'
import {EyeOutlined, DeleteOutlined} from '@ant-design/icons'
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import { useUtils } from '../../hooks/utils-hook'
import { useAppModal } from '../../hooks/app-modal'
import BookRequestForm from './book-request-form'
import { FORM_MODE } from '../constants'

const BookRequestTableOptions = ({record}) => {
    const {errors} = usePage().props;
    const {isEmpty} = useUtils()
    const {setShow, setContent, setTitle} = useAppModal()

    const onDelete = () => {
        Inertia.delete(`book-requests/${record.id}`)
        if(!isEmpty(errors)) {
            console.log('errors: ', errors)
            message.error('Could not delete request')
        }else {
            message.success('Deleted successfully')
        }
    }

    const onEdit = () => {
        setTitle('Edit book request')
        setContent(<BookRequestForm initialValues={record} mode={FORM_MODE.EDIT} />)
        setShow(true)
    }


    return (
        <>
        <Space>
            <Tooltip placement="topRight" title="View">
                <Button onClick={onEdit} icon={<EyeOutlined />}></Button>
            </Tooltip>
            <Tooltip placement="topRight" title="Delete">
                <Button onClick={onDelete} icon={<DeleteOutlined />} type="primary" danger></Button>
            </Tooltip>
        </Space>
        </>
    )
}

export default BookRequestTableOptions
