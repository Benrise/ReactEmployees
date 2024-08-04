import { EmployeeDto } from "@/5_entities/employee/model";
import { Form, Card, Space, Button } from "antd";
import { FormInput } from "@/6_shared/ui/form-input";
import { ErrorMessage } from "@/6_shared/ui/error-message";

type EmployeeFormProps<T> = {
  onFinish: (values: T) => void;
  btnText: string;
  title: string;
  error?: string;
  employee?: T;
};

export const EmployeeForm = ({
  onFinish,
  title,
  employee,
  btnText,
  error,
}: EmployeeFormProps<EmployeeDto>) => {
  return (
    <Card title={title} style={{ width: "30rem" }}>
      <Form name="add-employee" onFinish={onFinish} initialValues={employee}>
        <FormInput size='middle' type="text" name="firstName" placeholder="Имя" />
        <FormInput size='middle' type="text" name="lastName" placeholder="Фамилия" />
        <FormInput size='middle' type="number" name="age" placeholder="Возраст" />
        <FormInput size='middle' type="text" name="address" placeholder="Адрес" />
        <Space direction="vertical" size="large">
          <ErrorMessage message={ error } />
          <Button htmlType="submit">{btnText}</Button>
        </Space>
      </Form>
    </Card>
  );
};