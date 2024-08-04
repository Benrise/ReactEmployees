import { Form, Input } from "antd";

type FormInputProps = {
    name: string;
    placeholder: string;
    type: string;
    size: 'small' | 'middle' | 'large';
}

export const FormInput: React.FC<FormInputProps> = ({
    name,
    placeholder,
    type,
    size
}) => {
    return (
        <Form.Item name={name} shouldUpdate>
            <Input type={type} placeholder={placeholder} size={size}/>
        </Form.Item>
    )
}