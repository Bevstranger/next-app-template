'use client';

import Link from 'next/link';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Box, Flex, Group, Text } from '@mantine/core';
import { ContactIconsList } from '@/app/contacts/ContactIcons';
import Logo from '../public/logo_veteran.png';
import classes from './FooterLinks.module.css';

const data = [
  {
    title: '',
    links: [
      { label: 'Главная', link: '/' },
      { label: 'О нас', link: '#' },
      { label: 'Цены', link: '#' },
      { label: 'Новости', link: '#' },
    ],
  },
  {
    title: '',
    links: [
      { label: 'Услуги', link: '#' },
      { label: 'Вебинары', link: '#' },
      { label: 'Статьи', link: '#' },
      { label: 'Контакты', link: '/contacts' },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group, index) => {
    const links = group.links.map((link) => (
      <Link className={classes.link} href={link.link} key={link.label}>
        {link.label}
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={index}>
        {links}
      </div>
    );
  });

  return (
    <Box component="footer">
      <Flex
        direction="row"
        align="center"
        maw="inherit"
        m="10px"
        p="0 20px"
        justify="space-between"
        wrap="wrap"
      >
        <div className={classes.logo}>
          <img src={Logo.src} alt="logo" />
        </div>
        <Flex wrap="wrap" gap="250px" visibleFrom="sm">
          {groups}
        </Flex>
        <div className={classes.footerInfo}>
          <ContactIconsList />
        </div>
      </Flex>

      <Flex align="center" justify="space-between" bg="transparent">
        <Text c="dimmed" size="sm">
          2012-2025 В е т е р а н
        </Text>
        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Flex>
    </Box>
  );
}
