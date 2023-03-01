const { assert } = require("chai")
const { getNamedAccounts, ethers, network } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config.js")

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Register", function () {
          let register
          let deployer
          const myInfo = "Hello world"
          beforeEach(async () => {
              deployer = (await getNamedAccounts()).deployer
              register = await ethers.getContract("Register", deployer)
          })
          it("Allows people to set info and get to check it", async () => {
              const infoResponse = await register.setInfo(myInfo)
              await infoResponse.wait(1)
              const finalResponse = await register.getAddressToInfo(deployer)
              // Check if
              assert.equal(finalResponse, "Hello world")
          })
      })
