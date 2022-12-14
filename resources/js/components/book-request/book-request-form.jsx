import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { Button, Form, Input, message, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useAppModal } from "../../hooks/app-modal";
import { FORM_MODE } from "../constants";

const BookRequestForm = ({ bookRequest, mode = FORM_MODE.CREATE }) => {
    const { errors } = usePage().props;
    const { setShow } = useAppModal();
    const [form] = Form.useForm();
    const { Item } = Form;

    const onFinish = (formValues) => {
        if (mode === FORM_MODE.CREATE) {
            Inertia.post("/book-requests", {
                ...formValues,
                status: "pending",
            });
        } else {
            Inertia.patch(`/book-requests/${bookRequest.id}`, formValues);
            Inertia.visit("/book-requests");
        }
        message.success("Post created successfully");
        form.resetFields();
        setShow(false);
    };

    return (
        <div>
            <Form
                name="book-request-form"
                form={form}
                onFinish={onFinish}
                initialValues={bookRequest}
                labelAlign="right"
                colon={false}
                labelCol={{ span: 4 }}
                wrapperCol={{ flex: 1 }}
            >
                <Item
                    name="title"
                    label="Title"
                    validateStatus={errors && errors.title ? "error" : ""}
                    help={errors.title ?? ""}
                >
                    <Input placeholder="Title" />
                </Item>
                <Item
                    name="student_email"
                    label="Email"
                    validateStatus={
                        errors && errors.student_email ? "error" : ""
                    }
                    help={errors.student_email ?? ""}
                >
                    <Input type="email" placeholder="Email" />
                </Item>
                <Item
                    name="message"
                    label="Message"
                    validateStatus={errors && errors.message ? "error" : ""}
                    help={errors.message ?? ""}
                >
                    <TextArea rows={4} placeholder="Message" />
                </Item>
                {mode === FORM_MODE.EDIT ? (
                    <Item
                        name="status"
                        label="Status"
                        validateStatus={errors && errors.status ? "error" : ""}
                        help={errors.status ?? ""}
                    >
                        <Select>
                            <Select.Option value="pending">
                                Pending
                            </Select.Option>
                            <Select.Option value="resolved">
                                Resolved
                            </Select.Option>
                            <Select.Option value="other">Other</Select.Option>
                        </Select>
                    </Item>
                ) : null}
                <Item
                    wrapperCol={{ offset: 4, span: 16 }}
                    style={{ marginBottom: 0 }}
                >
                    <Button htmlType="submit">Save</Button>
                </Item>
            </Form>
        </div>
    );
};

export default BookRequestForm;
