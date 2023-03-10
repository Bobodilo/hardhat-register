const { assert } = require("chai")
const { network, deployments, ethers, getNamedAccounts } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Register", function () {
          let register
          let deployer
          let myInfo = "Hello world"
          beforeEach(async () => {
              deployer = (await getNamedAccounts()).deployer
              await deployments.fixture(["all"])
              register = await ethers.getContract("Register", deployer)
          })

          describe("setInfo", function () {
              it("Sets info", async () => {
                  await register.setInfo(myInfo)
                  const response = await register.getInfo()
                  assert.equal(response, myInfo)
              })

              it("Adds informer to array", async () => {
                  await register.setInfo(myInfo)
                  const response = await register.getInformer(0)
                  assert.equal(response, deployer)
              })
          })
      })
