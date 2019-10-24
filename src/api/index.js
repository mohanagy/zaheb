
// const API_URL = 'http://192.168.1.251:3000'
// const API_URL = 'http://192.168.1.252:3000'
const API_URL = 'http://mahmoudskaik.website'
const APIV1 = `${API_URL}/api`

module.exports = {
  API_URL,
  APIV1,
  api: {
    userLogin: `${APIV1}/login`,
    getCars: `${APIV1}/getCars`,
    getWorkshopsByServiceId: `${APIV1}/getWorkshopsByServiceId`,
    getServicesClassificationByCarTypeId: `${APIV1}/getServicesClassificationByCarTypeId`,
    registerUser: `${APIV1}/user/register`,
    checkUser: `${APIV1}/user/check`,
    updateProfile:`${APIV1}/update-profile/`,
    getUserProfile:`${APIV1}/myProfile`,
    getMyPurchases:`${APIV1}/myProductOrders`,
    getMyRequests:`${APIV1}/myOrders`,
    getWhoWeAre:`${APIV1}/who-we-are`,
    getTerms:`${APIV1}/terms-and-conditions`,
    getContactUs:`${APIV1}/contact-us`,
    getConversations:`${APIV1}/conversations`,
    getConversationByReceiverId:`${APIV1}/conversation?receiver_id=`,
    sendConversationMessage:`${APIV1}/conversation/send-message?receiver_id=`,
    getMyRequestedOffers: `${APIV1}/myRequestedOffers`,
    cancelMyRequestedOffers: `${APIV1}/cancelMyRequestedOffers?offer_id=`,
    getMyFavorites: `${APIV1}/getMyFavourite`,
    complain: `${APIV1}/user/complain`,
    contactUs: `${APIV1}/user/contact`,
    getWorkerActiveOrders: `${APIV1}/user/order/active/worker`,
    getClientActiveOrders: `${APIV1}/user/order/active`,
    getOrdersHistory: `${APIV1}/user/order/history`,
    checkOrderAssigned: `${APIV1}/user/order/check`,
    rateWorker: `${APIV1}/user/rate/worker`,
    calcRate: `${APIV1}/user/calc`,
    orderWithCode: `${APIV1}/user/order/code`,
    order: `${APIV1}/user/order`,
    getPackageOrders: `${APIV1}/user/packages/orders`,
    getPackagePrice: `${APIV1}/packages/price`,
    packages: `${APIV1}/user/packages`,
    getCode: `${APIV1}/code`,
    userInfo: `${APIV1}/user/info`,
    getPackageInfo: `${APIV1}/package`,
    orderDetails: `${APIV1}/order/info`,
    getInvitedPeople: `${APIV1}/invitedPeople`,
  },
  socketApi: {
    clientActiveOrders: 'clientActiveOrders',
    getWorkerActiveOrders: 'workerActiveOrders',
  },
}
