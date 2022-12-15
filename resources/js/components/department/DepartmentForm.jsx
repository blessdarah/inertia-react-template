import { SaveOutlined } from "@ant-design/icons";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { Form, Input, Button, message, Select } from "antd";
import React from "react";
import { useAppModal } from "../../hooks/app-modal";
import { FORM_MODE } from "../constants";

const DepartmentForm = ({ department, schools, mode = FORM_MODE.CREATE }) => {
    const { errors } = usePage().props;
    const { setShow } = useAppModal();
    const [form] = Form.useForm();
    const { Item } = Form;

    const onFinish = (formValues) => {
        if (mode === FORM_MODE.CREATE) {
            Inertia.post("/departments", formValues);
            message.success("department created successfully");
        } else {
            Inertia.patch(`/departments/${department.id}`, formValues);
            Inertia.visit("/departments");
            message.success("department updated successfully");
        }
        form.resetFields();
        setShow(false);
    };

    return (
        <div>
            <Form
                name="department-form"
                form={form}
                onFinish={onFinish}
                initialValues={department}
                labelAlign="right"
                colon={false}
                labelCol={{ span: 6 }}
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
                    name="school_id"
                    label="Select school"
                    validateStatus={errors && errors.school_id ? "error" : ""}
                    help={errors.school_id}
                >
                    <Select
                        showSearch
                        filterOption={(input, option) =>
                            (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                        }
                    >
                        {schools.map((school) => (
                            <Select.Option
                                label={school.name}
                                value={school.id}
                                key={school.id}
                            >
                                {school.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Item>
                <Item
                    wrapperCol={{ offset: 6, span: 12 }}
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

export default DepartmentForm;
