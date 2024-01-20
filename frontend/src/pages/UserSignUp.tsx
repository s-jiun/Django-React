import * as React from 'react';
import { Button, Checkbox, Form, Input, Flex } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};


function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

type FieldType = {
  username?: string;
  password1?: string;
  password2?: string;
  email?: string;
  name?: string;
  zip_code?: string;
  address?: string;
  detailAddress?: string;
};

const UserSignUp: React.FC = () => {

  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(null);

  const [pw1, setPw1] = React.useState('');
  const [pw2, setPw2] = React.useState('');
  const [pwError, setPwError] = React.useState(null);

  const handleEmailChange = event => {
    if (!isValidEmail(event.target.value)) {
      setEmailError('메일 주소 형식이 올바르지 않습니다.');
    } else {
      setEmailError(null);
    }
  
    setEmail(event.target.value);
  };
  
  const handlePwChange = event => {
    if (event.target.value !== pw1) {
      setPwError('비밀번호가 동일하지 않습니다');
    } else {
      setPwError(null);
    }
  
    setPw2(event.target.value);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Flex gap="small" wrap="wrap" justify='center'>
        <Form.Item<FieldType>
          label="아이디"
          name="username"
          rules={[{ required: true, message: '아이디는 필수 입력값입니다' }]}
        >
          <Input />
        </Form.Item>
        <Button type="primary">
          중복검사
        </Button>
      </Flex>
  
      <Form.Item<FieldType>
        label="비밀번호"
        name="password1"
        rules={[{ required: true, message: '비밀번호는 필수 입력값입니다' }]}
      >
        <Input.Password value={pw1} />
      </Form.Item>
  
      <Form.Item<FieldType>
        label="비밀번호"
        name="password2"
        rules={[{ required: true, message: '비밀번호를 다시 입력해주세요' }]}
      >
        <Input.Password value={pw2} onChange={handlePwChange} />
        {pwError && <p style={{color: 'red'}}>{pwError}</p>}
      </Form.Item>
  
      <Form.Item<FieldType>
        label="이메일"
        name="email"
        rules={[{ required: true, message: '메일 주소는 필수 입력값입니다' }]}
      >
        <Input value={email} onChange={handleEmailChange} />
        {emailError && <p style={{color: 'red'}}>{emailError}</p>}
      </Form.Item>
  
      <Form.Item<FieldType>
        label="성명"
        name="name"
        rules={[{ required: true, message: '이름은 필수 입력값입니다' }]}
      >
        <Input />
      </Form.Item>
  
      <Flex gap="small" wrap="wrap" justify='center'>
        <Form.Item<FieldType>
          label="우편번호"
          name="zip_code"
          rules={[{ required: true, message: '우편번호는 필수 입력값입니다' }]}
        >
          <Input />
        </Form.Item>
        <Button type="primary">
          우편번호 찾기
        </Button>
      </Flex>
  
      <Form.Item<FieldType>
        label="주소"
        name="address"
        rules={[{ required: true, message: '주소는 필수 입력값입니다' }]}
      >
        <Input />
      </Form.Item>
  
      <Form.Item<FieldType>
        label="상세 주소"
        name="detailAddress"
        rules={[{ required: true, message: '상세 주소는 필수 입력값입니다' }]}
      >
        <Input />
      </Form.Item>
  
      <Form.Item>
        <Button type="primary" htmlType="submit">
          회원가입
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UserSignUp;