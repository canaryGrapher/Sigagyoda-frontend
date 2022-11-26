import React, { Fragment } from 'react';

//importing components from ant design
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import { Radio } from 'antd';

//importing CSS file
import styles from '../styles/pages/Login.module.scss';

const Login = () => {
    return (
        <Fragment>
            <div className={`${styles.main_container}`}>
                <div
                    className={`${styles.overlay} m-0 p-0 h-100 w-100 d-flex flex-column justify-content-center text-center`}
                >
                    <h1 className="text-white display-4">Login Page</h1>
                    <div className="container w-50">
                        <h3 className="text-white">Select your role</h3>
                        <Radio.Group
                            defaultValue="technician"
                            buttonStyle="solid"
                            className="mb-4"
                        >
                            <Radio.Button value="technician">
                                Technician
                            </Radio.Button>
                            <Radio.Button value="receptionist">
                                Receptionist
                            </Radio.Button>
                            <Radio.Button value="doctor">Doctor</Radio.Button>
                            <Radio.Button value="operator">
                                Operator
                            </Radio.Button>
                        </Radio.Group>
                        <br />
                        <Space direction="vertical">
                            <h3 className="text-white mt-4">
                                Enter your credentials
                            </h3>
                            <Input placeholder="Username" />
                            <Input.Password
                                placeholder="Password"
                                iconRender={(visible: boolean) =>
                                    visible ? (
                                        <EyeTwoTone />
                                    ) : (
                                        <EyeInvisibleOutlined />
                                    )
                                }
                            />
                            <Button
                                type="primary"
                                block
                                style={{
                                    backgroundColor: '#00897b',
                                    borderWidth: '0',
                                }}
                            >
                                Login
                            </Button>
                        </Space>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;
