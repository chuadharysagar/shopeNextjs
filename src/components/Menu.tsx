import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { role } from '@/lib/data';

const sidebarMenu = [
  {
    title: 'Inventory',
    items: [
      {
        icon: '/products.png',
        label: 'Products',
        href: '/list/products',
        visible: ['admin', 'employee'],
      },
      {
        icon: '/supply.jpg',
        label: 'Suppliers',
        href: '/list/suppliers',
        visible: ['admin'],
      },
      {
        icon: '/lowStock.png',
        label: 'Low Stock',
        href: '/',
        visible: ['admin', 'employee'],
      },
    ],
  },
  {
    title: 'Sales',
    items: [
      {
        icon: '/sales.png',
        label: 'Sales Report',
        href: '/sales-report',
        visible: ['admin'],
      },
      {
        icon: '/invoice.jpg',
        label: 'Invoices',
        href: '/',
        visible: ['admin', 'employee'],
      },
    ],
  },
  {
    title: 'Users',
    items: [
      {
        icon: '/employee.png',
        label: 'Employees',
        href: '/',
        visible: ['admin'],
      },
    ],
  },
  {
    title: 'Account',
    items: [
      {
        icon: '/profile.png',
        label: 'Profile',
        href: '/',
        visible: ['admin', 'employee'],
      },
      {
        icon: '/setting.png',
        label: 'Settings',
        href: '/',
        visible: ['admin', 'employee'],
      },
      {
        icon: '/logout.png',
        label: 'Logout',
        href: '/',
        visible: ['admin', 'employee'],
      },
    ],
  },
];


const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
      {sidebarMenu.map((i) => {
        return (
          <div className='' key={i.title}>
            <span className='hidden lg:block text-gray-400 font-light my-4'>{i.title}</span>
            {i.items.map((item) => {
              if (item.visible.includes(role)) {
                return (
                  <Link href={item.href} key={item.label}
                    className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-skyLight '>
                    <Image src={item.icon} alt={item.label} width={24} height={24} />
                    <span className='hidden lg:block'>{item.label}</span>
                  </Link>
                )
              }
            })}

          </div>
        )
      })

      }

    </div>
  )
}

export default Menu