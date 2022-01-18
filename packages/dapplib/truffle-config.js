require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone strong radar muscle clump inside light army giggle'; 
let testAccounts = [
"0xcfd47df131c354391c39c64abbe6745fa03c93386fd2ab50b6ac8e865ccd9bc2",
"0x6591bf6ca1ded6bdcfbb2f3e65a239c78aa49868fb0eb7a7c7ae645c5e0d0eb8",
"0xa562f704bb3468475758251a742e2769d0625188b8590b3c76c8f89eca5e0dcf",
"0x282e57b90ef31d93b8c0998ecffc958ea4f601796d5aa516cced1fc6d5e44346",
"0x167918c0fb99a42382044a3f81080e713777eddedf07655493c03b0a222daf5e",
"0x5d1cf4ffc57008ca8389816832884981fcc45f3780080466d51e11b83bf2d5cb",
"0x5a97511472137f3ca5bfcb3cd8476d7476d0dc592a5256bdc3f77c62758d953e",
"0x260c70509403239b931cbf79695fad31fe3574c825e86f6e19c77516b4be8837",
"0x993d4d517b08000685287eaf271dcac8851a4d9184907623d83114f6e1897e53",
"0xa0da580208eeeeb4400c4ce4fbf87c5e4936ba0e850c956ba75a044f1f48c3a5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


