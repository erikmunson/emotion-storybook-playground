export const colors = {
  status: {
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
  },

  icons: {
    light: '#ffffff',
    neutral: 'rgba(0, 0, 0, 0.5)',
    dark: '#000000',
  },

  validation: {
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
  },

  typography: {
    standard: '#444444',
    light: '#666666',
  },
} as const;
