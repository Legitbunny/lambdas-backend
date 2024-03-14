// const data = require('./data.json')

// console.log("First Name:", data.customer.first_name)
// console.log("Last Name:", data.customer.last_name)
// console.log("City:", data.customer.city || data.shipping_address.city)
// console.log("Phone:", data.customer.phone)
// console.log("Address:", data.customer.default_address)
// console.log("Zip:", data.customer.default_address.zip)
// console.log("Country:", data.customer.default_address.country)
// console.log("Currency:", data.currency)
// console.log("Currency:", data.line_items[0])

const arr1 = [
  {
    productNumber: "1",
    name: "Timer samlet",
    barred: false,
    lastUpdated: "2013-12-20T13:48:00Z",
    productGroup: {
      productGroupNumber: 3,
      name: "Ydelser m/moms",
      salesAccounts:
        "https://restapi.e-conomic.com/product-groups/3/sales-accounts",
      products: "https://restapi.e-conomic.com/product-groups/3/products",
      self: "https://restapi.e-conomic.com/product-groups/3",
    },
    invoices: {
      drafts: "https://restapi.e-conomic.com/products/1/invoices/drafts",
      booked: "https://restapi.e-conomic.com/products/1/invoices/booked",
      self: "https://restapi.e-conomic.com/products/1/invoices",
    },
    pricing: {
      currencySpecificSalesPrices:
        "https://restapi.e-conomic.com/products/1/pricing/currency-specific-sales-prices",
    },
    self: "https://restapi.e-conomic.com/products/1",
  },
  {
    productNumber: "2",
    name: "Materialer",
    barred: false,
    lastUpdated: "2013-12-20T13:49:00Z",
    productGroup: {
      productGroupNumber: 1,
      name: "Varer m/moms",
      salesAccounts:
        "https://restapi.e-conomic.com/product-groups/1/sales-accounts",
      products: "https://restapi.e-conomic.com/product-groups/1/products",
      self: "https://restapi.e-conomic.com/product-groups/1",
    },
    invoices: {
      drafts: "https://restapi.e-conomic.com/products/2/invoices/drafts",
      booked: "https://restapi.e-conomic.com/products/2/invoices/booked",
      self: "https://restapi.e-conomic.com/products/2/invoices",
    },
    pricing: {
      currencySpecificSalesPrices:
        "https://restapi.e-conomic.com/products/2/pricing/currency-specific-sales-prices",
    },
    self: "https://restapi.e-conomic.com/products/2",
  },
  {
    productNumber: "3",
    name: "Afregning efter tilbud",
    barred: false,
    lastUpdated: "2013-12-20T13:49:00Z",
    productGroup: {
      productGroupNumber: 3,
      name: "Ydelser m/moms",
      salesAccounts:
        "https://restapi.e-conomic.com/product-groups/3/sales-accounts",
      products: "https://restapi.e-conomic.com/product-groups/3/products",
      self: "https://restapi.e-conomic.com/product-groups/3",
    },
    invoices: {
      drafts: "https://restapi.e-conomic.com/products/3/invoices/drafts",
      booked: "https://restapi.e-conomic.com/products/3/invoices/booked",
      self: "https://restapi.e-conomic.com/products/3/invoices",
    },
    pricing: {
      currencySpecificSalesPrices:
        "https://restapi.e-conomic.com/products/3/pricing/currency-specific-sales-prices",
    },
    self: "https://restapi.e-conomic.com/products/3",
  },
  {
    productNumber: "4",
    description: "Pen",
    name: "Default Title",
    recommendedPrice: 0,
    salesPrice: 2999,
    barred: false,
    lastUpdated: "2024-03-13T14:53:00Z",
    productGroup: {
      productGroupNumber: 1,
      name: "Varer m/moms",
      salesAccounts:
        "https://restapi.e-conomic.com/product-groups/1/sales-accounts",
      products: "https://restapi.e-conomic.com/product-groups/1/products",
      self: "https://restapi.e-conomic.com/product-groups/1",
    },
    invoices: {
      drafts: "https://restapi.e-conomic.com/products/4/invoices/drafts",
      booked: "https://restapi.e-conomic.com/products/4/invoices/booked",
      self: "https://restapi.e-conomic.com/products/4/invoices",
    },
    pricing: {
      currencySpecificSalesPrices:
        "https://restapi.e-conomic.com/products/4/pricing/currency-specific-sales-prices",
    },
    self: "https://restapi.e-conomic.com/products/4",
  },
  {
    productNumber: "7",
    name: "KarineRuby",
    costPrice: 2999,
    recommendedPrice: 0,
    salesPrice: 2999,
    barred: false,
    lastUpdated: "2024-03-14T08:01:00Z",
    productGroup: {
      productGroupNumber: 1,
      name: "Varer m/moms",
      salesAccounts:
        "https://restapi.e-conomic.com/product-groups/1/sales-accounts",
      products: "https://restapi.e-conomic.com/product-groups/1/products",
      self: "https://restapi.e-conomic.com/product-groups/1",
    },
    invoices: {
      drafts: "https://restapi.e-conomic.com/products/7/invoices/drafts",
      booked: "https://restapi.e-conomic.com/products/7/invoices/booked",
      self: "https://restapi.e-conomic.com/products/7/invoices",
    },
    pricing: {
      currencySpecificSalesPrices:
        "https://restapi.e-conomic.com/products/7/pricing/currency-specific-sales-prices",
    },
    self: "https://restapi.e-conomic.com/products/7",
  },
  {
    productNumber: "8",
    description: "aam",
    name: "s",
    recommendedPrice: 0,
    salesPrice: 40,
    barred: false,
    lastUpdated: "2024-03-13T15:08:00Z",
    productGroup: {
      productGroupNumber: 1,
      name: "Varer m/moms",
      salesAccounts:
        "https://restapi.e-conomic.com/product-groups/1/sales-accounts",
      products: "https://restapi.e-conomic.com/product-groups/1/products",
      self: "https://restapi.e-conomic.com/product-groups/1",
    },
    invoices: {
      drafts: "https://restapi.e-conomic.com/products/8/invoices/drafts",
      booked: "https://restapi.e-conomic.com/products/8/invoices/booked",
      self: "https://restapi.e-conomic.com/products/8/invoices",
    },
    pricing: {
      currencySpecificSalesPrices:
        "https://restapi.e-conomic.com/products/8/pricing/currency-specific-sales-prices",
    },
    self: "https://restapi.e-conomic.com/products/8",
  },
  {
    productNumber: "9",
    description: "aam",
    name: "m",
    recommendedPrice: 0,
    salesPrice: 40,
    barred: false,
    lastUpdated: "2024-03-13T15:08:00Z",
    productGroup: {
      productGroupNumber: 1,
      name: "Varer m/moms",
      salesAccounts:
        "https://restapi.e-conomic.com/product-groups/1/sales-accounts",
      products: "https://restapi.e-conomic.com/product-groups/1/products",
      self: "https://restapi.e-conomic.com/product-groups/1",
    },
    invoices: {
      drafts: "https://restapi.e-conomic.com/products/9/invoices/drafts",
      booked: "https://restapi.e-conomic.com/products/9/invoices/booked",
      self: "https://restapi.e-conomic.com/products/9/invoices",
    },
    pricing: {
      currencySpecificSalesPrices:
        "https://restapi.e-conomic.com/products/9/pricing/currency-specific-sales-prices",
    },
    self: "https://restapi.e-conomic.com/products/9",
  },
  {
    productNumber: "10",
    description: "aam",
    name: "l",
    recommendedPrice: 0,
    salesPrice: 40,
    barred: false,
    lastUpdated: "2024-03-13T15:08:00Z",
    productGroup: {
      productGroupNumber: 1,
      name: "Varer m/moms",
      salesAccounts:
        "https://restapi.e-conomic.com/product-groups/1/sales-accounts",
      products: "https://restapi.e-conomic.com/product-groups/1/products",
      self: "https://restapi.e-conomic.com/product-groups/1",
    },
    invoices: {
      drafts: "https://restapi.e-conomic.com/products/10/invoices/drafts",
      booked: "https://restapi.e-conomic.com/products/10/invoices/booked",
      self: "https://restapi.e-conomic.com/products/10/invoices",
    },
    pricing: {
      currencySpecificSalesPrices:
        "https://restapi.e-conomic.com/products/10/pricing/currency-specific-sales-prices",
    },
    self: "https://restapi.e-conomic.com/products/10",
  },
  {
    productNumber: "50",
    description: "test again",
    name: "Default Title",
    recommendedPrice: 0,
    salesPrice: 100,
    barred: false,
    lastUpdated: "2024-03-13T21:33:00Z",
    productGroup: {
      productGroupNumber: 1,
      name: "Varer m/moms",
      salesAccounts:
        "https://restapi.e-conomic.com/product-groups/1/sales-accounts",
      products: "https://restapi.e-conomic.com/product-groups/1/products",
      self: "https://restapi.e-conomic.com/product-groups/1",
    },
    invoices: {
      drafts: "https://restapi.e-conomic.com/products/50/invoices/drafts",
      booked: "https://restapi.e-conomic.com/products/50/invoices/booked",
      self: "https://restapi.e-conomic.com/products/50/invoices",
    },
    pricing: {
      currencySpecificSalesPrices:
        "https://restapi.e-conomic.com/products/50/pricing/currency-specific-sales-prices",
    },
    self: "https://restapi.e-conomic.com/products/50",
  },
  {
    productNumber: "economicFields",
    name: "Test Product",
    recommendedPrice: 0,
    salesPrice: 0,
    barred: false,
    lastUpdated: "2024-03-13T23:49:00Z",
    productGroup: {
      productGroupNumber: 1,
      name: "Varer m/moms",
      salesAccounts:
        "https://restapi.e-conomic.com/product-groups/1/sales-accounts",
      products: "https://restapi.e-conomic.com/product-groups/1/products",
      self: "https://restapi.e-conomic.com/product-groups/1",
    },
    invoices: {
      drafts:
        "https://restapi.e-conomic.com/products/economicFields/invoices/drafts",
      booked:
        "https://restapi.e-conomic.com/products/economicFields/invoices/booked",
      self: "https://restapi.e-conomic.com/products/economicFields/invoices",
    },
    pricing: {
      currencySpecificSalesPrices:
        "https://restapi.e-conomic.com/products/economicFields/pricing/currency-specific-sales-prices",
    },
    self: "https://restapi.e-conomic.com/products/economicFields",
  },
];


const ar2 = ['6']

const matchedProducts = arr1.filter(element => ar2.includes(element.productNumber));
console.log(matchedProducts);