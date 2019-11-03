const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');
const assert = require('chai').assert;

describe('API', function(){
  it('API should return 10 items', function(){
    bby.products('categoryPath.id=cat02015',{show:`name,salePrice,image`}).then(function(data){
      assert.equal(data.from,'1');
      assert.equal(data.to,'10');
    });
  });

  it('data.products should be array', function(){
    bby.products('categoryPath.id=cat02015',{show:`name,salePrice,image`}).then(function(data){
      assert.isArray(data.products, 'data products is array');
    });
  });

  it('data contains all required keys', function(){
    bby.products('categoryPath.id=cat02015',{show:`name,salePrice,image`}).then(function(data){
      assert.containsAllKeys(data.products, ['name','salePrice','image']);
    });
  });
});
