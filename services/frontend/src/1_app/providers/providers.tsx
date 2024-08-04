import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Button, Result } from 'antd';

interface IProviders {
    readonly children: JSX.Element
}

export const Providers: FC<IProviders> = ({ children }) => {
    return (
        <ErrorBoundary fallback={
            <Result
                status="500"
                title="Непредвиденная ошибка"
                subTitle="Что-то пошло не так"
                extra={<Button type="primary">На главную</Button>}
            />
          }>
            <Provider store={store}>
                {children}
            </Provider>
        </ErrorBoundary>
    )
}