import React, { Component, useRef, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { actAddEmployeeReq } from '../../../../actions/actEmployees';
import './AddEmployee.scss';
import { AdminLayout } from '../../AdminLayout/AdminLayout';
import { addEmployeeType } from '../../../redux/actionTypes'
import { useHistory } from 'react-router';
const PageAddEmployee = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const [state, setState] = useState()
  const [file, setFile] = useState(null)
  const fileInput = useRef();

  const onChangeFile = () => {
    let fileZero = fileInput.current.files[0];
    setFile(() => (fileZero))
  }

  const onSubmit = (values) => {
    const newData = new FormData();
    newData.append('avatar', file);
    newData.append('employeeID', values.employeeID);
    newData.append('nameEmployee', values.nameEmployee);
    newData.append('roleEmployee', values.roleEmployee);
    newData.append('dayOfBirthEmployee', values.dayOfBirthEmployee);

    newData.append('genderEmployee', values.genderEmployee);
    newData.append('addressEmployee', values.addressEmployee);
    newData.append('numberPhoneEmployee', values.numberPhoneEmployee);
    newData.append('emailEmployee', values.emailEmployee);

    dispatch({ type: addEmployeeType.request, payload: newData })

  }

  return (
    <AdminLayout>
      <div className="pageaddemployee">
        <div className="form">
          <Container>
            <legend>THÊM NHÂN VIÊN</legend>
            <Formik
              initialValues={{
                employeeID: '',
                nameEmployee: '',
                dayOfBirthEmployee: '',
                genderEmployee: '',
                addressEmployee: '',
                emailEmployee: '',
                numberPhoneEmployee: '',
              }}
              validationSchema={
                Yup.object().shape({
                  employeeID: Yup.string().required(),
                  nameEmployee: Yup.string().required(),
                  dayOfBirthEmployee: Yup.date().required(),
                  genderEmployee: Yup.string().required(),
                  addressEmployee: Yup.string().required(),
                  emailEmployee: Yup.string().email().required(),
                  numberPhoneEmployee: Yup.number().required(),
                })
              }

              onSubmit={(values) => onSubmit(values)}
            >
              {({
                errors, handleChange, values, handleSubmit,
              }) => (
                <Form className="form_" onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="ID nhân viên"
                      name="employeeID"
                      value={values.employeeID}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.employeeID}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Tên nhân viên"
                      name="nameEmployee"
                      value={values.nameEmployee}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.nameEmployee}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="date"
                      placeholder="Ngày sinh"
                      name="dayOfBirthEmployee"
                      value={values.dayOfBirthEmployee}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.dayOfBirthEmployee}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Giới tính"
                      name="genderEmployee"
                      value={values.genderEmployee}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.genderEmployee}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Địa chỉ"
                      name="addressEmployee"
                      value={values.addressEmployee}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.addressEmployee}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      name="emailEmployee"
                      value={values.emailEmployee}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.emailEmployee}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Số điện thoại"
                      name="numberPhoneEmployee"
                      value={values.numberPhoneEmployee}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.numberPhoneEmployee}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="form-group-input-file" controlId="formBasicEmail">
                    <input
                      type="file"
                      name="avatarTour"
                      onChange={onChangeFile}
                      ref={fileInput}
                    />
                    <br />
                    <div className="img_">
                      <img id="img_avatar" src="" />
                    </div>
                    <Form.Text className="text-muted" />
                  </Form.Group>
                  <Button className="btn_submitForm" variant="primary" type="submit">
                    Thêm nhân viên
                  </Button>
                </Form>
              )}
            </Formik>
          </Container>
        </div>
      </div>
    </AdminLayout>
  );
}

export default PageAddEmployee
