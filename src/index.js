// Import necessary dependencies
import { registerBlockType } from '@wordpress/blocks';
import Edit from './components/edit';
import Save from './components/Save';
import Attributes from './components/Attributes'; // Import the Attributes component

// Register your custom block
registerBlockType('my-crypto-project/crypto-price', {
  title: 'Crypto Price',
  icon: 'money',
  category: 'common',
  attributes: {
    ...Attributes, // Spread the Attributes object here
    coinSymbol: {
      type: 'string',
      default: 'BTC',

      showPrice: {
        type: 'boolean',
        default: true,
      },

      priceInfo: {
        type: 'object',
      },
    },
  },
  edit: Edit,
  save: Save,
});
