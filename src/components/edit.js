// Import the necessary dependencies
import { TextControl, Button } from '@wordpress/components';
import { Component } from '@wordpress/element';

// Edit component for your custom block
class MyCryptoBlockEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceInfo: null, // Store the entire response object
    };
  }
  fetchPrice = async () => {
    const { attributes, setAttributes } = this.props;
    const { coinSymbol } = attributes;
  
    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/${coinSymbol}USD?apikey=11054ba978fe87b95ce7c2606faa2f46`); // Your API URL
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // Update state with fetched price info
      this.setState({ priceInfo: data[0] });
  
      // Update the 'showPrice' attribute to store the fetched price
      setAttributes({
        showPrice: true,
        priceInfo: data[0], // Store the entire response object
      });
    } catch (error) {
      console.error('Error fetching price:', error);
    }
  };
  
  
  render() {
    const { attributes, setAttributes } = this.props;
    const { priceInfo } = this.state;
    const mystyle ={

      color:"black",
      fontSize: "26px",
      backgroundColor: "blue",
      padding: "30px",
      fontFamily: "Arial",
      marginTop:  "12px"


    };
    const mystyles ={
      padding: "30px"


    };
    return (
      <div>
        <h3>Crypto Price Block</h3>
        <TextControl
          label="Coin Symbol"
          value={attributes.coinSymbol}
          onChange={(newSymbol) => setAttributes({ coinSymbol: newSymbol })}
          style={mystyles}
          
        />
        <Button onClick={this.fetchPrice} style={mystyle}>Fetch Price</Button>
        {priceInfo && (
          <div>
            <p>Symbol: {priceInfo.symbol}</p>
            <p>Name: {priceInfo.name}</p>
            <p>Price: {priceInfo.price}</p>
            {/* Display more properties as needed */}
          </div>
        )}
      </div>
    );
  }
}

export default MyCryptoBlockEdit;
