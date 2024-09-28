'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import {
  FormContainer,
  InputField,
  Label,
  SubmitButton,
  ErrorMessage,
  SuccessMessage,
  LoadingSpinner
} from './FormInstallPool.styles';

// Esquema de validação do formulário
const schema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório').min(3, 'Nome muito curto'),
  email: yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
  phone: yup
    .string()
    .matches(/^\(?\d{2}\)?[\s-]?[\d]{4,5}-?[\d]{4}$/, 'Telefone inválido')
    .required('O telefone é obrigatório'),
  zipCode: yup.string().matches(/^\d{5}-?\d{3}$/, 'CEP inválido').required('O CEP é obrigatório'),
  message: yup.string().required('A mensagem é obrigatória').min(10, 'Mensagem muito curta')
});

const FormInstallPool = () => {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [error, setError] = useState(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setResponseMessage(null); // Limpa mensagens anteriores
    setError(null); // Limpa erros anteriores
    try {
      // Conectar à sua API
      const response = await axios.post('/api/install-pool', data); // Exemplo de rota de API

      if (response.status === 200) {
        setResponseMessage('Sua solicitação foi enviada com sucesso!');
        reset(); // Limpa o formulário após o sucesso
      } else {
        setError('Erro inesperado. Tente novamente mais tarde.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Ocorreu um erro ao enviar o formulário. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {responseMessage && <SuccessMessage>{responseMessage}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Label>Nome</Label>
      <InputField type="text" {...register('name')} placeholder="Seu nome" />
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

      <Label>E-mail</Label>
      <InputField type="email" {...register('email')} placeholder="Seu e-mail" />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <Label>Telefone</Label>
      <InputField type="tel" {...register('phone')} placeholder="(XX) XXXXX-XXXX" />
      {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}

      <Label>CEP</Label>
      <InputField type="text" {...register('zipCode')} placeholder="XXXXX-XXX" />
      {errors.zipCode && <ErrorMessage>{errors.zipCode.message}</ErrorMessage>}

      <Label>Mensagem</Label>
      <InputField as="textarea" {...register('message')} placeholder="Como podemos ajudar?" rows={4} />
      {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}

      <SubmitButton type="submit" disabled={loading}>
        {loading ? <LoadingSpinner /> : 'Enviar'}
      </SubmitButton>
    </FormContainer>
  );
};

export default FormInstallPool;
