require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift razor soap coast grace cover army gentle'; 
let testAccounts = [
"0x8c64320018918250256248e95ad8f6aea3e3c1f3c4781798ce33d99f909a9f6e",
"0x1c23b05bb592a5a720a96a4cb29e9b981ebbb32774e1c3ecf63185fc42f1524b",
"0x39b4dc086856b00c8ba8960ffd87d2526e36aa361aa853f4d504d15c10ed52bc",
"0x8dde83c131b395a82b746e770dcec373beca9f6d9842c93666ffad3cd591efe1",
"0xf8ca642bf7563423c3bc659074f5ada5d953e0cda4ed3f57252705e4f2eac5a4",
"0xa8aab547a355c031ab0a22b436ca0e0ba7c9eff33a7961867fa5b5bb7e2ddc6a",
"0x7dcc5d03354616fe6a4947d94a9c5c267010da7b51126be758f1d495f613dcfd",
"0x72f0e07f315c7ef6362328d2453283dd7a6afc2bb0914925b13b4e4827a7e8b0",
"0x45895f5caba13ee2436481013432aa6ff1f467a071b8a6a2e962e403fc910b32",
"0x9af812d95b20890440affe5eb6715ad3cbf1b18a5db6124cbdd9d092e2516da6"
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


