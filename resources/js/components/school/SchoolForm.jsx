import { SaveOutlined } from "@ant-design/icons";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { Form, Input, Button, message } from "antd";
import React from "react";
import { useAppModal } from "../../hooks/app-modal";
import { FORM_MODE } from "../constants";

const SchoolForm = ({ school, mode = FORM_MODE.CREATE }) => {
    const { errors } = usePage().props;
    const { setShow } = useAppModal();
    const [form] = Form.useForm();
    const { Item } = Form;

    const onFinish = (formValues) => {
        if (mode === FORM_MODE.CREATE) {
            Inertia.post("/schools", formValues);
            message.success("School created successfully");
        } else {
            Inertia.patch(`/schools/${school.id}`, formValues);
            Inertia.visit("/schools");
            message.success("School updated successfully");
        }
        form.resetFields();
        setShow(false);
    };

    return (
        <div>
            <Form
                name="school-form"
                form={form}
                onFinish={onFinish}
                initialValues={school}
                labelAlign="right"
                colon={false}
                labelCol={{ span: 4 }}
                wrapperCol={{ flex: 1 }}
            >
                <Item
                    name="name"
                    label="Name"
                    validateStatus={errors && errors.title ? "error" : ""}
                    help={errors.name ?? ""}
                >
                    <Input placeholder="Name" />
                </Item>
                <Item
                    name="description"
                    label="Description"
                    validateStatus={errors && errors.description ? "error" : ""}
                    help={errors.description ?? ""}
                >
                    <Input placeholder="Description" />
                </Item>
                <Item
                    wrapperCol={{ offset: 4, span: 16 }}
                    style={{ marginBottom: 0 }}
                >
                    <Button
                        htmlType="submit"
                        icon={<SaveOutlined />}
                        type="primary"
                    >
                        Save
                    </Button>
                </Item>
            </Form>
        </div>
    );
};

export default SchoolForm;
