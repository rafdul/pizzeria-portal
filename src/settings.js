export const api = {
  url: '//' + window.location.hostname + (window.location.hostname ==='localhost' ? ':3131' : ''),
  tables: 'tables',
  bookedTable: 'bookedTable',
  products: 'products',
  order: 'order',
  booking: 'booking',
  event: 'event',
  dateStartParamKey: 'date_gte',
  dateEndParamKey: 'date_lte',
  notRepeatParam: 'repeat=false',
  repeatParam: 'repeat_ne=false',
};
