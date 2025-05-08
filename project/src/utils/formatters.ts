/**
 * Format a number as INR currency
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
};

/**
 * Format a number with a specified precision and suffix
 */
export const formatNumber = (value: number, precision: number = 1, suffix: string = ''): string => {
  return value.toFixed(precision) + (suffix ? ` ${suffix}` : '');
};

/**
 * Format a percentage value
 */
export const formatPercent = (value: number): string => {
  return value.toFixed(1) + '%';
};

/**
 * Format years with appropriate suffix
 */
export const formatYears = (value: number): string => {
  return value.toFixed(1) + (value === 1 ? ' year' : ' years');
};

/**
 * Format energy in kWh
 */
export const formatEnergy = (value: number): string => {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(2) + ' MWh';
  }
  if (value >= 1000) {
    return (value / 1000).toFixed(2) + ' MWh';
  }
  return value.toFixed(0) + ' kWh';
};

/**
 * Format carbon offset in tons
 */
export const formatCarbonOffset = (value: number): string => {
  return value.toFixed(1) + ' tons CO₂';
};