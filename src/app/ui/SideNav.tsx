import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Skeleton, Box, Button, List, NavLink, ScrollArea, Flex, Divider, AspectRatio } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { IconSunHigh, IconMoon, IconActivity, IconChevronRight } from '@tabler/icons-react'
import { useAppDispatch, useAppSelector } from '@/app/lib/redux/hooks';
import { setTheme } from '@/app/lib/redux/slices/mainConfigSlice';
import NextImage from 'next/image'
import { menus } from '@/app/lib/placeholder-data';
import classes from './SideNav.module.css'

import { usePathname } from 'next/navigation';
import NextLink from 'next/link'

export function SideNav({children}: { children: React.ReactNode}) {
  const [opened, { toggle }] = useDisclosure();
  const theme = useAppSelector((state) => state.mainConfig.theme);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const links = menus.map((menu, idx) => (
    <NextLink
      className={classes.link}
      data-active={menu.url === pathname || undefined}
      href={menu.url}
      key={idx}
    //   onClick={(event) => {
    //     event.preventDefault();
    //   }}
    >
      {/* <item.icon className={classes.linkIcon} stroke={1.5} /> */}
      <span>{menu.title}</span>
    </NextLink>
  ));

  
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Box>
              <AspectRatio ratio={3} w='130px' h='50px'>
                {
                  theme === 'light' ? 
                  <NextImage 
                      src={'/images/uniclass_logo_resize.png'}
                      width={120}
                      height={120}
                      alt="uniclass logo"
                      priority={true}
                  /> : 
                  <NextImage 
                      src={'/images/uniclass_logo_resize_white.png'}
                      width={120}
                      height={120}
                      alt="uniclass logo white"
                      priority={true}
                  /> 
                }
              </AspectRatio>

          </Box>
          <Box ml='auto'>
            <Button
                onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}
            >
                {
                    theme === 'light' ? 
                    <IconSunHigh /> :
                    <IconMoon />
                }
            </Button>
          </Box>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
            <ScrollArea h='100%'>
                {links}
            </ScrollArea>
            <Box mt='auto'>
                    <Divider />
                <Box w='100%' h='100%' p='1rem 0'>
                    <div>User Account</div>
                </Box>
            </Box>

      </AppShell.Navbar>
      
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}