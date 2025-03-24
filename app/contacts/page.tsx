'use client';

import { Button, Group, Paper, px, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ContactIconsList } from './ContactIcons';
import classes from './GetInTouch.module.css';

export default function GetInTouch() {
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
    <Paper shadow="md" radius="lg" bg="rgba(0, 0, 0, 0.5)" m="10px 20px">
      <div
        className={classes.wrapper}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', height: 'auto' }}
      >
        <div className={classes.contacts} style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff" mb={30}>
            Контакты
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} onSubmit={form.onSubmit(() => form.reset())}>
          <Text fz="lg" fw={700} className={classes.title} mb={30}>
            Свяжитесь с нами
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Имя" placeholder="Ваше имя" {...form.getInputProps('name')} />
              <TextInput label="Email" placeholder="Ваш email" {...form.getInputProps('email')} />
            </SimpleGrid>

            <TextInput
              mt="md"
              label="Тема"
              placeholder="Тема сообщения"
              {...form.getInputProps('subject')}
            />

            <Textarea
              mt="md"
              label="Ваше сообщение"
              placeholder="Пожалуйста, напишите нам свое сообщение"
              minRows={3}
              {...form.getInputProps('message')}
            />
            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control} style={{ background: '#34C759' }}>
                Отправить
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
