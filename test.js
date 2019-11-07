const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');
const { assert } = require('chai');

describe('API for Movies & TV category', () => {
  it('API should return 10 items', () => {
    bby.products('categoryPath.id=cat02015', { show: 'name,salePrice,image' }).then((data) => {
      assert.equal(data.from, '1');
      assert.equal(data.to, '10');
    });
  });

  it('data.products should be array', () => {
    bby.products('categoryPath.id=cat02015', { show: 'name,salePrice,image' }).then((data) => {
      assert.isArray(data.products, 'data products is array');
    });
  });

  it('data contains all required keys', () => {
    bby.products('categoryPath.id=cat02015', { show: 'name,salePrice,image' }).then((data) => {
      assert.containsAllKeys(data.products[0], ['name', 'salePrice', 'image']);
    });
  });
});

describe('API for Music category', () => {
  it('API should return 10 items', () => {
    bby.products('categoryPath.id=cat02001', { show: 'name,salePrice,image' }).then((data) => {
      assert.equal(data.from, '1');
      assert.equal(data.to, '10');
    });
  });

  it('data.products should be array', () => {
    bby.products('categoryPath.id=cat02001', { show: 'name,salePrice,image' }).then((data) => {
      assert.isArray(data.products, 'data products is array');
    });
  });

  it('data contains all required keys', () => {
    bby.products('categoryPath.id=cat02001', { show: 'name,salePrice,image' }).then((data) => {
      assert.containsAllKeys(data.products[0], ['name', 'salePrice', 'image']);
    });
  });
});

describe('API for Gift cards category', () => {
  it('API should return 10 items', () => {
    bby.products('categoryPath.id=pcmcat325900050007', { show: 'name,salePrice,image' }).then((data) => {
      assert.equal(data.from, '1');
      assert.equal(data.to, '10');
    });
  });

  it('data.products should be array', () => {
    bby.products('categoryPath.id=pcmcat325900050007', { show: 'name,salePrice,image' }).then((data) => {
      assert.isArray(data.products, 'data products is array');
    });
  });

  it('data contains all required keys', () => {
    bby.products('categoryPath.id=pcmcat325900050007', { show: 'name,salePrice,image' }).then((data) => {
      assert.containsAllKeys(data.products[0], ['name', 'salePrice', 'image']);
    });
  });
});
