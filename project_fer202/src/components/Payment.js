import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Image } from 'react-bootstrap';
import '../style/Payment.css';

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    // Implement payment processing logic here
    alert(`Payment method selected: ${paymentMethod}`);
  };

  return (
    <Container className="payment-page">
      <h2>Phương Thức Thanh Toán</h2>
      <Form onSubmit={handlePayment}>
        <Form.Group>
          <Form.Label>Chọn thẻ thanh toán</Form.Label>
          <div className="payment-methods">
            <Form.Check
              type="radio"
              label={<><Image src="payment/Payment1.png" /> Thanh toán tại quầy</>}
              name="paymentMethod"
              id="localCard"
              value="localCard"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Form.Check
              type="radio"
              label={<><Image src="payment/Payment2.png" /> Ví VN Pay</>}
              name="paymentMethod"
              id="internationalCard"
              value="internationalCard"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Form.Check
              type="radio"
              label={<><Image src="payment/Payment3.png" /> Ví MoMo</>}
              name="paymentMethod"
              id="zalopay"
              value="zalopay"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Form.Check
              type="radio"
              label={<><Image src="payment/Payment4.png" /> Ví ShopeePay</>}
              name="paymentMethod"
              id="shopeepay"
              value="shopeepay"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
        </Form.Group>
        <Button variant="primary" type="submit">
          Thanh Toán
        </Button>
      </Form>
    </Container>
  );
}