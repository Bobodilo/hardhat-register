const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const register = await ethers.getContract("Register", deployer)
    console.log("Setting Info...")
    const transactionResponse = await register.setInfo("Hello world")
    await transactionResponse.wait(1)
    console.log("Set!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
//get a signer
//get a contract
//set the info
//log funded
