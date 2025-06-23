import React from 'react';
import 'host_app/i18n';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import './Search.css'

const Search = ({ onSendData }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (onSendData) {
      onSendData(data); 
    }
  };

  return (
    <div className="login" style={{ margin: 'auto' }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
            <div className='col-md-6'>
                <Form.Group controlId="formName" style={{ marginTop: '25px' }}>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder={t('firstName')}
                        {...register('firstName', { required: t('field_required') })}
                    />
                    {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName.message}</span>}
                </Form.Group>
            </div> <br /><br />
            <div className='col-md-6'>
                <Form.Group controlId="formLastName" style={{ marginTop: '25px' }}>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder={t('lastName')}
                        {...register('lastName', { required: t('field_required') })}
                    />
                    {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName.message}</span>}
                </Form.Group>
            </div><br /><br />
            <div className='col-md-6'>
                <Form.Group controlId="formRole" style={{ marginTop: '25px' }}>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder={t('Age')}
                        {...register('Age', { required: t('field_required') })}
                    />
                    {errors.Age && <span style={{ color: 'red' }}>{errors.Age.message}</span>}
                </Form.Group>
            </div><br /><br />
            <div className='col-md-6'>
                <Form.Group controlId="formRole" style={{ marginTop: '25px' }}>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder={t('Role')}
                        {...register('Role', { required: t('field_required') })}
                    />
                    {errors.Role && <span style={{ color: 'red' }}>{errors.Role.message}</span>}
                </Form.Group>
            </div>
        </div>
       
        <Button type="submit" variant="primary" className='add_btn' style={{ marginTop: '25px' }}>
          {t('EngineeringDepartment.Search')}
        </Button>
      </Form>
    </div>
  );
};

export default Search;
