import React from 'react';
import { useDispatch } from 'react-redux';

import { useReducers } from 'hooks';
import { setEmail, sendEmail } from 'store/actions';
import { verifyContact } from 'utils';
import { Form, Input, Submit, TextArea } from 'components';

function ContactForm() {
  const dispatch = useDispatch();
  const contact = useReducers('contact');

  const handleChange = ({ target }) => {
    dispatch(setEmail({
      [target.name]: target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const verified = verifyContact(contact);
    if(verified) dispatch(sendEmail(contact));
  }

  React.useEffect(() => {
    if(contact.error)
      alert('Ocurrio un error al intentar enviar el mensaje, por favor intente nuevamente.');
  }, [contact.error]);

  React.useEffect(() => {
    if(contact.sended)
      alert('El mensaje se envio correctamente!');
    dispatch(setEmail({ sended: false }));
  }, [dispatch, contact.sended]);

  return <Form
    className='contact__form'
    onSubmit={handleSubmit}>
    <Input
      onChange={handleChange}
      className='contact__name'
      placeholder='Nombre'
      name='name'
      autoComplete='off'
      value={contact.name}/>
    <Input
      onChange={handleChange}
      className='contact__email'
      placeholder='Email'
      name='email'
      autoComplete='off'
      value={contact.email}/>
    <Input
      onChange={handleChange}
      className='contact__subject'
      placeholder='Asunto'
      name='subject'
      autoComplete='off'
      value={contact.subject}/>
    <TextArea
      onChange={handleChange}
      className='contact__message'
      placeholder='Mensaje'
      name='message'
      value={contact.message}>
    </TextArea>
    <div className='contact__submit--container'>
      <Submit className='contact__submit'>
        Enviar mensaje!
      </Submit>
    </div>
  </Form>
}

export default ContactForm;