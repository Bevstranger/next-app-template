'use client';

import {
  Button,
  Container,
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

  const handleSubmit = (values: any) => {
    console.log(`Форма отправлена: ${JSON.stringify(values)}`);
  };

  return (
    <Paper shadow="md" radius="lg" bg="rgba(0, 0, 0, 0.5)" m="10px 20px">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Container size="sm" className="relative h-full flex items-center w-1/2">
          <div className="max-w-2xl text-white">
            <Title order={1} className="text-4xl md:text-5xl mb-6">
              Профессиональная охрана объектов в
            </Title>
            <Text className="text-lg md:text-xl mb-8 text-gray-200">
              Предоставляем полный комплекс охранных услуг для бизнеса и частных лиц. Гарантируем
              высокий уровень безопасности и индивидуальный подход к каждому клиенту.
            </Text>
            <Group>
              <Button size="lg" bg="primary">
                Рассчитать стоимость
              </Button>
              <Button
                size="lg"
                variant="white"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                Наши услуги
              </Button>
            </Group>
          </div>
        </Container>
        <Container className="w-1/2">
          <div>
            <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
              <Text fz="lg" fw={700} className={classes.title}>
                Свяжитесь с нами
              </Text>

              <div className={classes.fields}>
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                  <TextInput label="Имя" placeholder="Ваше имя" {...form.getInputProps('name')} />
                  <TextInput
                    label="Email"
                    placeholder="Ваш email"
                    {...form.getInputProps('email')}
                  />
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
                  <Button type="submit" className={classes.control}>
                    Отправить
                  </Button>
                </Group>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </Paper>
  );
}
