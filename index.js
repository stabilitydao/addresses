export const MAINNET = 1
export const ROPSTEN = 3
export const RINKEBY = 4
export const GOERLI = 5
export const KOVAN = 42
// export const OPTIMISTIC_KOVAN = 69
// export const MUMBAI = 80001

export default {
  [MAINNET]: {
    token: '0x3fa5F9c876BEbB41B8924633850b1a9922f7E4F9',
    devFund: '0xEb49018157bAF7F1B385657D10fF5a5a5F4BB4c9',
  },
  [ROPSTEN]: {
    token: '0x29E4d6c08e3AD060Dc2fC8DCE70AaB8C8c57563F',
    devFund: '0x90AfD7eEE756c85Aa9800d33Fda674618ddECFbf',
  },
  [RINKEBY]: {
    token: '0x7D68ECf1762bA27120d0f98BFcFa0da67eb15860',
    devFund: '0x62706332c976f92bBd5F099fB8D4717951eC00a4',
  },
  [GOERLI]: {
    token: '0x4D7D07196E24D15d8E5B97216aeDCf4518b23A66',
    devFund: '0x90AfD7eEE756c85Aa9800d33Fda674618ddECFbf',
  },
  [KOVAN]: {
    token: '0x108aBca337e88a9fc1DE96b0ec323f476b35cD44',
    devFund: '0x90AfD7eEE756c85Aa9800d33Fda674618ddECFbf',
  },
}
