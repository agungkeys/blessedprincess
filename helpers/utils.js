export function priceFormat(price = 0, currency = 'Rp') {
  let newPrice = price;
  if (newPrice !== null) {
    newPrice = newPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
    return `${currency} ${newPrice}`;
  }
  return '';
}

export function formatDate(date) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
  const d = new Date(date),
    month = '' + (monthNames[d.getMonth()]),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (day.length < 2) 
    day = '0' + day;

  return [day, month, year].join(' ');
}

export function isObjectEmpty(obj) {
  for (const prop in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
}