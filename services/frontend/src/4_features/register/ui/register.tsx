import { Card, Form, Space, Typography, Button } from "antd";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { isErrorWithMessage } from "@/6_shared/utils/utils";
import { paths } from "@/1_app/router";
import { PasswordInput } from "@/6_shared/ui/password-input";
import { FormInput } from "@/6_shared/ui/form-input";
import { ErrorMessage } from "@/6_shared/ui/error-message";
import { RegisterDto } from "../model";

export const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const register = async (data: RegisterDto) => {
    try {

      navigate(paths.home);
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
    <Card title="Зарегистрируйтесь" style={{ width: "30rem" }}>
        <Form onFinish={register}>
        <FormInput size='large' type="text" name="name" placeholder="Имя" />
        <FormInput size='large' type="email" name="email" placeholder="Email" />
        <PasswordInput name="password" placeholder="Пароль" />
        <PasswordInput name="confirmPassword" placeholder="Пароль" />
        </Form>
        <Space direction="vertical" size="large">
            <Button type="primary" htmlType="submit">
                Зарегистрироваться
            </Button>
            <Typography.Text>
                Уже зарегистрированы? <NavLink to={paths.login}>Войдите</NavLink>
            </Typography.Text>
            <ErrorMessage message={error} />
        </Space>
    </Card>
  );
};