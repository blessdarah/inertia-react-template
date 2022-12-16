import { SaveOutlined } from "@ant-design/icons";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { Form, Input, Button, message, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useAppModal } from "../../hooks/app-modal";
import { FORM_MODE } from "../constants";

const DissertationForm = ({
    dissertation = {},
    schools,
    departments,
    mode = FORM_MODE.CREATE,
}) => {
    const { errors } = usePage().props;
    const { setShow } = useAppModal();
    const [form] = Form.useForm();
    const { Item } = Form;

    const onFinish = (formValues) => {
        if (mode === FORM_MODE.CREATE) {
            Inertia.post("/dissertations", formValues);
            message.success("dissertation created successfully");
        } else {
            Inertia.patch(`/dissertations/${dissertation.id}`, formValues);
            // Inertia.visit("/dissertations");
            message.success("dissertation updated successfully");
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
                initialValues={dissertation}
                labelAlign="right"
                colon={false}
                labelCol={{ span: 6 }}
                wrapperCol={{ flex: 1 }}
            >
                {/* title */}
                <Item
                    name="title"
                    label="Title"
                    validateStatus={errors && errors.title ? "error" : ""}
                    help={errors.title ?? ""}
                >
                    <Input placeholder="Dissertation title" />
                </Item>

                {/* abstract */}
                <Item
                    name="abstract"
                    label="Abstract"
                    validateStatus={errors && errors.abstract ? "error" : ""}
                    help={errors.abstract ?? ""}
                >
                    <TextArea placeholder="abstract" />
                </Item>

                {/* file */}
                <Item
                    name="file"
                    label="File"
                    validateStatus={errors && errors.file ? "error" : ""}
                    help={errors.file ?? ""}
                >
                    <Input type="file" placeholder="file" />
                </Item>

                {/* author */}
                <Item
                    name="author"
                    label="author"
                    validateStatus={errors && errors.author ? "error" : ""}
                    help={errors.author ?? ""}
                >
                    <Input placeholder="author" />
                </Item>

                {/* supervisor */}
                <Item
                    name="supervisor"
                    label="supervisor"
                    validateStatus={errors && errors.supervisor ? "error" : ""}
                    help={errors.supervisor ?? ""}
                >
                    <Input placeholder="supervisor" />
                </Item>

                {/* school */}
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

                {/* department */}
                <Item
                    name="department_id"
                    label="Select department"
                    validateStatus={
                        errors && errors.department_id ? "error" : ""
                    }
                    help={errors.department_id}
                >
                    <Select
                        showSearch
                        filterOption={(input, option) =>
                            (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                        }
                    >
                        {departments.map((department) => (
                            <Select.Option
                                label={department.name}
                                value={department.id}
                                key={department.id}
                            >
                                {department.name}
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

export default DissertationForm;
