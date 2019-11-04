const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');
const assert = require('chai').assert;

describe('API for Movies & TV category', function(){
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
      assert.containsAllKeys(data.products[0], ['name','salePrice','image']);
    });
  });
});

describe('API for Music category', function(){
  it('API should return 10 items', function(){
    bby.products('categoryPath.id=cat02001',{show:`name,salePrice,image`}).then(function(data){
      assert.equal(data.from,'1');
      assert.equal(data.to,'10');
    });
  });

  it('data.products should be array', function(){
    bby.products('categoryPath.id=cat02001',{show:`name,salePrice,image`}).then(function(data){
      assert.isArray(data.products, 'data products is array');
    });
  });

  it('data contains all required keys', function(){
    bby.products('categoryPath.id=cat02001',{show:`name,salePrice,image`}).then(function(data){
      assert.containsAllKeys(data.products[0], ['name','salePrice','image']);
    });
  });
});

describe('API for Gift cards category', function(){
  it('API should return 10 items', function(){
    bby.products('categoryPath.id=pcmcat325900050007',{show:`name,salePrice,image`}).then(function(data){
      assert.equal(data.from,'1');
      assert.equal(data.to,'10');
    });
  });

  it('data.products should be array', function(){
    bby.products('categoryPath.id=pcmcat325900050007',{show:`name,salePrice,image`}).then(function(data){
      assert.isArray(data.products, 'data products is array');
    });
  });

  it('data contains all required keys', function(){
    bby.products('categoryPath.id=pcmcat325900050007',{show:`name,salePrice,image`}).then(function(data){
      assert.containsAllKeys(data.products[0], ['name','salePrice','image']);
    });
  });
});
