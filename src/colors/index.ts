export const statusColors = {
  inactive: '#c0c0c0',
  neutral: '#999999',
  info: '#61b9ff',
  progress: '#61b9ff',
  success: '#64c800',
  warning: '#ffad26',
  error: '#ff8282',

  inactiveLight: '#666666',
  neutralLight: '#ebebeb',
  infoLight: '#e6f0ff',
  progressLight: '#e6f0ff',
  successLight: '#e1f5d2',
  warningLight: '#f8f8bb',
  errorLight: '#ffe1e1',
} as const;

export const iconColors = {
  light: '#ffffff',
  neutral: 'rgba(0, 0, 0, 0.5)',
  dark: '#000000',
} as const;

export const validationColors = {
  error: '#CE0000',
  info: '#0065b7',
  success: '#007023',
  warning: '#F7CE00',

  errorLight: '#FCDDDE',
  infoLight: '#D8F2FA',
  successLight: '#DBF1E3',
  warningLight: '#FAECAC',
} as const;
