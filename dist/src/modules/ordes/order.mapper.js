"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMapper = void 0;
const response_category_order_dto_1 = require("./dto/response.category.order.dto");
const response_order_dto_1 = require("./dto/response.order.dto");
const response_orderdetail_dto_1 = require("./dto/response.orderdetail.dto");
const response_product_order_dto_1 = require("./dto/response.product.order.dto");
const response_user_order_dto_1 = require("./dto/response.user.order.dto");
class OrderMapper {
    mapToResponseOrderDto(order) {
        const user = new response_user_order_dto_1.ResponseUserOrderDto();
        user.id = order.user.id;
        user.email = order.user.email;
        const products = order.orderDetail.products.map((product) => {
            const category = new response_category_order_dto_1.ResponseCategoryOrderDto();
            category.id = product.category.id;
            category.name = product.category.name;
            const responseProduct = new response_product_order_dto_1.ResponseProductOrderDto();
            responseProduct.id = product.id;
            responseProduct.name = product.name;
            responseProduct.price = product.price;
            responseProduct.category = category;
            return responseProduct;
        });
        const orderDetail = new response_orderdetail_dto_1.ResponseOrderDetailDto();
        orderDetail.id = order.orderDetail.id;
        orderDetail.price = order.orderDetail.price;
        orderDetail.products = products;
        const responseOrder = new response_order_dto_1.ResponseOrderDto();
        responseOrder.id = order.id;
        responseOrder.user = user;
        responseOrder.orderDetail = orderDetail;
        return responseOrder;
    }
}
exports.OrderMapper = OrderMapper;
//# sourceMappingURL=order.mapper.js.map