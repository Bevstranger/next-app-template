'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IconCarGarage,
  IconChevronDown,
  IconDeviceCctv,
  IconFileTextShield,
  IconHomeShield,
  IconSpy,
  IconUsers,
  IconUserShield,
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';

const mockdata = [
  {
    icon: IconHomeShield,
    title: 'Охрана объектов',
    description: 'Защита жилых домов, офисов и других объектов',
  },
  {
    icon: IconUsers,
    title: 'Охрана мероприятий',
    description: 'Охрана концертов, спортивных мероприятий, выставок',
  },
  {
    icon: IconCarGarage,
    title: 'Сопровождение грузов',
    description: 'Охрана грузов при перевозке',
  },
  {
    icon: IconUserShield,
    title: 'Личная охрана',
    description: 'Защита частных лиц и их семей',
  },
  {
    icon: IconSpy,
    title: 'Услуги детектива',
    description: 'Услуги по поиску людей, разысканию преступников',
  },
  {
    icon: IconDeviceCctv,
    title: 'Системы безопасности',
    description: 'Системы видеонаблюдения, доступа и управления',
  },
  {
    icon: IconFileTextShield,
    title: 'Аудит безопасности предприятий',
    description: 'Аудит безопасности и рекомендации по улучшению',
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const pathname = usePathname();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title} p={10} mih={80}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.green[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={4}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link
            href="/"
            className={classes.logo}
            style={{
              fontFamily: 'Roboto',
            }}
          >
            <span style={{ color: theme.colors.green[6] }}>частная охранная организация</span>
            <span style={{ fontSize: '29px' }}>в е т е р а н</span>
            <span style={{ letterSpacing: '-.04em', color: theme.colors.green[6] }}>
              ваша безопасность - наша работа
            </span>
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link
              href="/"
              className={classes.link}
              style={{ color: pathname === '/' ? theme.colors.green[6] : 'inherit' }}
            >
              Главная
            </Link>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <Link href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Услуги
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.green[6]} />
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown
                style={{
                  overflow: 'hidden',
                  background: 'black',
                  opacity: '0.9',
                  color: pathname === '/services' ? theme.colors.green[6] : 'inherit',
                }}
              >
                <Group justify="space-between" px="md">
                  <Text fw={500}>Услуги</Text>
                  <Anchor href="#" fz="xs" c={theme.colors.green[6]}>
                    посмотреть все
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                {/* <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div> */}
              </HoverCard.Dropdown>
            </HoverCard>
            <Link href="#" className={classes.link}>
              О нас
            </Link>
            <Link href="#" className={classes.link}>
              Вакансии
            </Link>
            <Link href="#" className={classes.link}>
              Цены
            </Link>
            <Link href="#" className={classes.link}>
              Статьи
            </Link>
            <Link
              href="/contacts"
              className={classes.link}
              style={{ color: pathname === '/contacts' ? theme.colors.green[6] : 'inherit' }}
            >
              Контакты
            </Link>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Войти</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Навигация"
        hiddenFrom="sm"
        zIndex={1000000}
        // bg={'url(http://vetsec.ru/assets/app/img/menu_bg.jpg)'}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <Link href="/" className={classes.link}>
            Главная
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Услуги
              </Box>
              <IconChevronDown size={16} color={theme.colors.green[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Link href="#" className={classes.link}>
            О нас
          </Link>
          <Link href="#" className={classes.link}>
            Вакансии
          </Link>
          <Link href="#" className={classes.link}>
            Цены
          </Link>
          <Link href="#" className={classes.link}>
            Статьи
          </Link>
          <Link href="/contacts" className={classes.link}>
            Контакты
          </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Войти</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
