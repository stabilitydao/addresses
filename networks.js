import {MAINNET, RINKEBY, ROPSTEN} from "./index";

export default {
    [MAINNET]: {
        explorer: 'https://etherscan.io',
    },
    [ROPSTEN]: {
        explorer: 'https://ropsten.etherscan.io',
    },
    [RINKEBY]: {
        explorer: 'https://rinkeby.etherscan.io',
    },
}