const env = process.env.NODE_ENV

var urls = {
  marketList: '/app/std_mendian/order/v2/storeDealerList.action',
  homeGoodsType: '/app/std_mendian/order/v2/findProductClass.action',
  homeGoodsDetail: '/app/std_mendian/order/v2/toSelectProduct.action',
  homeGoodsList: '/app/std_mendian/order/v2/findProductList.action',
  cartList: '/app/std_mendian/order/shoppingCart/queryAll.action',
  promotionInfo: '/app/std_mendian/order/promotion/queryPromotionInfo.action',
  specProd: '/app/std_mendian/order/shoppingCart/querySpecifiedProduct.action',
  cartListCount: '/app/std_mendian/order/shoppingCart/queryAllCount.action',
  cartDelete: '/app/std_mendian/order/shoppingCart/deleteDetails.action',
  cartAdd: '/app/std_mendian/order/shoppingCart/add.action',
  cartCount: '/app/std_mendian/order/shoppingCart/updateDetailCount.action',
  orderSubmit: '/app/std_mendian/order/v2/saveOrders.action',
  orderList: '/app/std_mendian/order/v2/viewOrderList.action',
  orderDetail: '/app/std_mendian/order/v2/orderDetail.action',
  starGoods: '/app/std_mendian/order/v2/collectionProductList.action',
  alwaysGoods: '/app/std_mendian/order/v2/oftenbuyProductList.action',
  starOperator: '/app/std_mendian/order/v2/collectionProduct.action',
  orderCancel: '/app/std_mendian/order/v2/cancelOrder.action',
  getAddress: '/app/std_mendian/address/h5/address_list.action',
  addressList: '/app/std_mendian/address/h5/address_detail.action',
  addressSave: '/app/std_mendian/address/h5/address_saveOrUpdate.action',
  addressDelete: '/app/std_mendian/address/h5/address_delete.action',
  saleList: '/app/std_mendian/order/promotion/queryPromotions.action',
  saleDetail: '/app/std_mendian/order/promotion/queryPromotionDetail.action',
  deleteStar: '/app/std_mendian/order/v2/deleteCollectionProduct.action',
  mySelfList: '/app/std_mendian/order/v2/getMineInfo.action',
  myOrderStatusTabs: '/app/std_mendian/order/v2/getMyOrderStatusTabs.action',
  signConfirm: '/app/std_mendian/order/v2/signReceiveOrder.action',
  signSalesOrder: '/app/std_mendian/order/v2/signSalesOrder.action'
  // tempCartListUrl: '/app/std_mendian/order/shoppingCart/queryAll2.action1'
}

if (env === 'development') {
  const host = 'http://172.31.3.60:8088'

  for (var i in urls) {
    if (urls.hasOwnProperty(i)) {
      urls[i] = host + urls[i]
    }
  }
}

export default urls
