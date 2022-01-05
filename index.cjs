const MAINNET = 1
const POLYGON = 137
const ROPSTEN = 3
const RINKEBY = 4
const GOERLI = 5
const KOVAN = 42
const MUMBAI = 80001

module.exports = {
  MAINNET,
  POLYGON,
  ROPSTEN,
  RINKEBY,
  GOERLI,
  KOVAN,
  MUMBAI,
  [POLYGON]: {
    token: '0x48469a0481254d5945E7E56c1Eb9861429c02f44',
    devFund: '0x36780E69D38c8b175761c6C5F8eD42E61ee490E9',
    weth: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    dToken: '0x9844a1c30462B55cd383A2C06f90BB4171f9D4bB',
    dPool: '0x29353bB4c9010c6112a77d702Ac890e70CD73d53',
    dPayers: [
      '0xf81FCd61b18BAb470418161B6cFaF95a3796762b',
      '0xfAaF85133C142b872061bE1e254f099E50edbD2f',
    ],
    govTl: '0x40Ff0883f6AB81F7d617F9502FDFC5E497fA34d8',
    gov: '0x7EE76C309ed8AdCfE9681E05c7612706014274a3',
    splitter: '0xa2B13bc8d067a73C75bd09C6991c45D21b1067b2',
  },
  [ROPSTEN]: {
    token: '0x29E4d6c08e3AD060Dc2fC8DCE70AaB8C8c57563F',
    devFund: '0x90AfD7eEE756c85Aa9800d33Fda674618ddECFbf',
    weth: '0xc778417e063141139fce010982780140aa0cd5ab',
    dToken: '0x424E1eAe04a2580EcD4d5f19Ad5285cC2b05a05C',
    dPool: '0x20169ebb1b60ee0c45ECAa5235551cC69Ea788C0',
    dPayers: [
      '0x6BaF629618551Cb7454013F67f5d4A9119A61627',
    ],
    govTl: '0x2f7438f01C842f0C5Ab6F99b84Ad62DF97BBf9ca',
    gov: '0x76fFD18aB85039842813Dc7adED26636bD03451F',
    splitter: '0x41c07333E5D979e6E3915eD7eb253D52cA538c01',
  },
  [MUMBAI]: {
    token: '0x108abca337e88a9fc1de96b0ec323f476b35cd44',
    devFund: '0x90AfD7eEE756c85Aa9800d33Fda674618ddECFbf',
    weth: '0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa',
    dToken: '0x21160EA4ebc4E644777514774965a506a98D01c6',
    dPool: '0x152231B068b498612966Ce2D8618895dA8728972',
    dPayers: [
      '0x4dC2E6Bd77842DAf7890205DFe14aC86FbC61421',
    ],
    govTl: '0xE6b2Da12b51E7a6561cEB04C9cE9E29487c38F23',
    gov: '0xC2eAfC3F3Ee1677A1C0B827Aa3a410D74653FC91',
    splitter: '0x8bDd46A71c4819f275e46067166dDC21676c44a7',
  },
  [RINKEBY]: {
    token: '0x7D68ECf1762bA27120d0f98BFcFa0da67eb15860',
    devFund: '0x62706332c976f92bBd5F099fB8D4717951eC00a4',
    weth: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  },
  [GOERLI]: {
    token: '0x4D7D07196E24D15d8E5B97216aeDCf4518b23A66',
    devFund: '0x90AfD7eEE756c85Aa9800d33Fda674618ddECFbf',
    weth: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
  },
  [KOVAN]: {
    token: '0x108aBca337e88a9fc1DE96b0ec323f476b35cD44',
    devFund: '0x90AfD7eEE756c85Aa9800d33Fda674618ddECFbf',
    weth: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
  },
  [MAINNET]: {
    weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
}
