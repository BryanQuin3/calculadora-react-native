import {colors} from '../config/theme/app-theme';
import {ButtonType} from './types.definitions';

export const buttons: ButtonType[][] = [
  [
    {
      label: 'C',
      textColor: colors.red,
      doubleSize: false,
    },
    {
      label: '+/-',
      textColor: colors.periwinkle,
    },
    {
      label: 'del',
      textColor: colors.periwinkle,
    },
    {
      label: '÷',
      textColor: colors.periwinkle,
    },
  ],
  [
    {
      label: '7',
    },
    {
      label: '8',
    },
    {
      label: '9',
    },
    {
      label: '×',
      textColor: colors.periwinkle,
    },
  ],
  [
    {
      label: '4',
    },
    {
      label: '5',
    },
    {
      label: '6',
    },
    {
      label: '−',
      textColor: colors.periwinkle,
    },
  ],
  [
    {
      label: '1',
    },
    {
      label: '2',
    },
    {
      label: '3',
    },
    {
      label: '+',
      textColor: colors.periwinkle,
    },
  ],
  [
    {
      label: '0',
      doubleSize: true,
    },
    {
      label: '.',
    },
    {
      label: '=',
      backgroundColor: colors.purple,
      textColor: colors.white,
    },
  ],
];
