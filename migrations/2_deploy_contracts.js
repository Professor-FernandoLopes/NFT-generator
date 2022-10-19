const OpenPunks = artifacts.require("OpenPunks")



module.exports = async function (deployer, network) {
  if(network === 'goerli') {
   // await deployer.deploy(TokenEth);
   // const tokenEth = await TokenEth.deployed();
  //  await tokenEth.mint("1000000000000000000000", addresses[0]);
    
    await deployer.deploy(OpenPunks, "defiPunk", "DP", 0,25, 
    1663835304
, "QmdtbSr5gHuqWPD4seobd1FmawYYcLzyJevBkCZ7TNxKno",'');
     await OpenPunks.deployed();
   // await tokenEth.transferOwnership(bridgeEth.address);
  }
}