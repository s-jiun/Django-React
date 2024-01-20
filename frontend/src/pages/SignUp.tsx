import * as React from 'react';
import { Card, Flex } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = Card;

const SignUp: React.FC = () => (
    <Flex justify='space-evenly' align='center'>
        <Link to={"/signup/seller"}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" />}
            >
                <Meta title="사업주이신가요?" description="Market Owner" />
            </Card>
        </Link>
        <Link to={"/signup/general"}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://images.pexels.com/photos/3775602/pexels-photo-3775602.jpeg" />}
            >
                <Meta title="일반 회원이신가요?" description="Customer" />
            </Card>
        </Link>
    </Flex>
);

export default SignUp;