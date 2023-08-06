const MyCryptoBlockSave = (props) => {
  const { attributes } = props;
  const { showPrice, priceInfo } = attributes;

  return (
    <div>
      <h3>Crypto Prices Block</h3>
      {showPrice && (
        <div>
          <p>Symbol: {priceInfo.symbol}</p>
          <p>Name: {priceInfo.name}</p>
          <p>Price: {priceInfo.price}</p>
        </div>
      )}
    </div>
  );
};

export default MyCryptoBlockSave;

