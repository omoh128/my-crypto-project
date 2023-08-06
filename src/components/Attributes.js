const attributes = {
    coinSymbol: {
      type: 'string',
      default: 'BTC',
    },
    showPrice: {
      type: 'boolean',
      default: true,
    },
    fontSize: {
      type: 'number',
      default: 16,
    },
    priceInfo: {
      type: 'object',
      default: {},
    },
  };
  
  export default attributes;
  