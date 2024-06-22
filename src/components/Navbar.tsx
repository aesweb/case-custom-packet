'use client';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    'Ürünler',
    'Biz Kimiz?',
    'Bağış Kültürü',
    'Blog',
    'Regl Testi!',
    'Kendi Paketini Oluştur',
  ];

  return (
    <Navbar className="bg-[#F5F5F5]">
      <NavbarBrand>
        <img src="/logo.svg" alt="" />
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-8" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="text-sm">
            Ürünler
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground" className="text-sm">
            Biz Kimiz?
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-sm">
            Bağış Kültürü
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-sm">
            Regl Testi!
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-sm">
            Kendi Paketini Oluştur
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="#">
            <img src="/basket.svg" alt="" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <img src="/user.svg" alt="" />
          </Link>
        </NavbarItem>
        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="foreground" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
