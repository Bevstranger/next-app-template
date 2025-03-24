'use client';

import {
  Button,
  Container,
  Flex,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './contacts/GetInTouch.module.css';

export default function HomePage() {
  const form = useForm({
    initialValues: { name: '', email: '', subject: '', message: '' },
    validate: {
      name: (value) => (value.trim().length > 0 ? null : 'Введите имя'),
      email: (value) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
          ? null
          : 'Некорректный email',
      subject: (value) => (value.trim().length > 0 ? null : 'Введите тему'),
      message: (value) => (value.trim().length > 0 ? null : 'Введите сообщение'),
    },
  });

  return (
    <Paper
      shadow="md"
      radius="lg"
      className={classes.wrapper}
      bg="rgba(0, 0, 0, 0.5)"
      m="10px 20px"
    >
      <Flex direction={{ base: 'column', md: 'row' }} align="center" maw="inherit">
        <Container flex={2} size="xl" py="xl" className={classes.contacts}>
          <Title order={1} className={classes.title} ta="center">
            Профессиональная охрана объектов
          </Title>
          <Text className={classes.description} ta="center">
            Предоставляем полный комплекс охранных услуг для бизнеса и частных лиц. Гарантируем
            высокий уровень безопасности и индивидуальный подход к каждому клиенту.
          </Text>
          <Group justify="center" mt="md">
            <Button size="md" color="green.6">
              Рассчитать стоимость
            </Button>
            <Button size="md" variant="outline" color="white">
              Наши услуги
            </Button>
          </Group>
        </Container>

        <Container size="sm" py="xl" className={classes.formContainer}>
          <form className={classes.form} onSubmit={form.onSubmit(() => form.reset())}>
            <Title order={2} className={classes.formTitle} ta="center">
              Свяжитесь с нами
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" mt="md">
              <TextInput
                label="Имя"
                placeholder="Ваше имя"
                {...form.getInputProps('name')}
                required
              />
              <TextInput
                label="Email"
                placeholder="Ваш email"
                {...form.getInputProps('email')}
                required
              />
            </SimpleGrid>
            <TextInput
              mt="md"
              label="Тема"
              placeholder="Тема сообщения"
              {...form.getInputProps('subject')}
              required
            />
            <Textarea
              mt="md"
              label="Ваше сообщение"
              placeholder="Пожалуйста, напишите нам свое сообщение"
              minRows={4}
              {...form.getInputProps('message')}
              required
            />
            <Group justify="center" mt="md">
              <Button type="submit" size="md" style={{ background: '#34C759' }}>
                Отправить
              </Button>
            </Group>
          </form>
        </Container>
      </Flex>
    </Paper>
  );
}
