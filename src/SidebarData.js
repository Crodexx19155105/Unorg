import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';
export const SidebarData = [
  {
    title: 'Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Items',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Orders',
    icon: <RiIcons.RiBillLine />,
    cName: 'nav-text'
  },
  {
    title: 'Vehicles',
    icon: <MdIcons.MdEmojiTransportation />,
    cName: 'nav-text'
  },
  {
    title: 'Trips',
    icon: <BiIcons.BiTrip />,
    cName: 'nav-text'
  }
];