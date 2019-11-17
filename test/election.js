var Election = artifacts.require('./Election.sol');

contract("Election", function(accounts){

  it("initializes with two candidates", function(){
    return Election.deployed().then((instance)=>{
      return instance.candidatesCount();
    }).then((count)=>{
      assert.equal(count, 2);
    });
  });
}); 