const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const register = await ethers.getContract("Register", deployer)
    console.log("Getting Info...")
    await register.getAddressToInfo(deployer)
    console.log("Got it!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
