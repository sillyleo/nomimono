/**
 * @title IconButton shadow Demo1 Title
 * @description IconButton shadow demo1 description
 */

import React from 'react';
import IconButton from '..';
import { darkTheme } from '../../styles/theme.css';
import LucideIcon from '../../LucideIcon';
import Stack from '../../Stack';

const Demo1 = () => {
  return (
    <Stack
      direction={'row'}
      alignItems='flex-start'
      // className={darkTheme}
    >
      <IconButton
        shadow
        size='sm'
        rightIcon={<LucideIcon name={'chevron-down'} />}
        tone='gray'
        intent='primary'
      />
      <IconButton
        shadow
        size='md'
        rightIcon={<LucideIcon name={'chevron-down'} />}
        tone='gray'
        intent='primary'
      />
      <IconButton
        shadow
        size='lg'
        tone='gray'
        intent='primary'
        rightIcon={<LucideIcon name={'chevron-down'} />}
      />

      <IconButton shadow size='sm' tone='gray' intent='secondary' />
      <IconButton shadow size='md' tone='gray' intent='secondary' />
      <IconButton shadow size='lg' tone='gray' intent='secondary' />

      <IconButton shadow size='sm' tone='gray' intent='primary' />
      <IconButton shadow size='md' tone='gray' intent='primary' />
      <IconButton shadow size='lg' tone='gray' intent='primary' />
      <IconButton shadow size='sm' tone='orange' intent='primary' />
      <IconButton shadow size='md' tone='orange' intent='primary' />
      <IconButton shadow size='lg' tone='orange' intent='primary' />
      <IconButton shadow size='sm' tone='amber' intent='primary' />
      <IconButton shadow size='md' tone='amber' intent='primary' />
      <IconButton shadow size='lg' tone='amber' intent='primary' />
      <IconButton shadow size='sm' tone='blue' intent='primary' />
      <IconButton shadow size='md' tone='blue' intent='primary' />
      <IconButton shadow size='lg' tone='blue' intent='primary' />

      <IconButton tone={'amber'} gradient size={'sm'} shadow>
        💡
      </IconButton>
      <IconButton tone={'amber'} gradient size={'md'} shadow>
        💡
      </IconButton>
      <IconButton tone={'amber'} gradient size={'lg'} shadow>
        💡
      </IconButton>
    </Stack>
  );
};

export default Demo1;
