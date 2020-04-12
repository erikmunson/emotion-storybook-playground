export const statusColors = {
  standard: {
    inactive: '#c0c0c0',
    neutral: '#999999',
    info: '#61b9ff',
    progress: '#61b9ff',
    success: '#64c800',
    warning: '#ffad26',
    error: '#ff8282',
  },

  light: {
    neutral: '#ebebeb',
    info: '#e6f0ff',
    progress: '#e6f0ff',
    success: '#e1f5d2',
    warning: '#f8f8bb',
    error: '#ffe1e1',
  },
} as const;

export const iconColors = {
  light: '#ffffff',
  neutral: 'rgba(0, 0, 0, 0.5)',
  dark: '#000000',
} as const;

export const validationColors = {
  standard: {
    error: '#CE0000',
    info: '#0065b7',
    success: '#007023',
    warning: '#F7CE00',
  },

  light: {
    error: '#FCDDDE',
    info: '#D8F2FA',
    success: '#DBF1E3',
    warning: '#FAECAC',
  },
} as const;
