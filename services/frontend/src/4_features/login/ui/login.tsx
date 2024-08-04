import { Card, Form, Space, Typography, Button } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isErrorWithMessage } from "@/6_shared/utils/utils";
import { paths } from "@/1_app/router";
import { PasswordInput } from "@/6_shared/ui/password-input";
import { FormInput } from "@/6_shared/ui/form-input";
import { ErrorMessage } from "@/6_shared/ui/error-message";
import { UserDto } from "@/5_entities/user/model";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const login = async (data: UserDto) => {
    try {
      navigate("/");
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };

  return (
    <Card title="Вход" style={{ width: "30rem" }}>
        <Form onFinish={login}>
        <FormInput size="large" type="email" name="email" placeholder="Email" />
        <PasswordInput name="password" placeholder="Пароль" />
        </Form>
        <Space direction="vertical" size="large">
            <Button
                type="primary"
                htmlType="submit"
            >
                Войти
            </Button>
            <Typography.Text>
                Нет аккаунта? <Link to={paths.register}>Зарегистрируйтесь</Link>
            </Typography.Text>
            
            <ErrorMessage message={error} />
        </Space>
    </Card>
  );
};