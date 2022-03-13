// A proxy is essentially a controller to different APIs. Adding additional functionality such as
// a caching feature.
class CryptoAPI {
  getCoin(coin) {
    switch (coin) {
      case "BTC":
        return "bitcoin";
      case "ETH":
        return "ethereum";
      case "XRP":
        return "ripple";
      case "BCH":
        return "bitcoin-cash";
      case "LTC":
        return "litecoin";
      default:
        return "invalid-coin";
    }
  }
}

class CryptocurrentProxy {
  constructor() {
    this.cryptoAPI = new CryptoAPI();
    this.cache = {};
  }

  getCoin(coin) {
    if (this.cache[coin]) {
      return this.cache[coin];
    }

    const result = this.cryptoAPI.getCoin(coin);
    this.cache[coin] = result;

    return result;
  }
}

const proxy = new CryptocurrentProxy();
console.log(proxy.getCoin("BTC"));
console.log(proxy.getCoin("BTC"));
