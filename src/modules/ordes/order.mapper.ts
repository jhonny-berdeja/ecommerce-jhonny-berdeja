import { OrderEntity } from './order.entity';
import { ResponseCategoryOrderDto } from './dto/response.category.order.dto';
import { ResponseOrderDto } from './dto/response.order.dto';
import { ResponseOrderDetailDto } from './dto/response.orderdetail.dto';
import { ResponseProductOrderDto } from './dto/response.product.order.dto';
import { ResponseUserOrderDto } from './dto/response.user.order.dto';

export class OrderMapper {
  mapToResponseOrderDto(order: OrderEntity) {
    const user = new ResponseUserOrderDto();
    user.id = order.user.id;
    user.email = order.user.email;

    const products = order.orderDetail.products.map((product) => {
      const category = new ResponseCategoryOrderDto();
      category.id = product.category.id;
      category.name = product.category.name;
      const responseProduct = new ResponseProductOrderDto();
      responseProduct.id = product.id;
      responseProduct.name = product.name;
      responseProduct.price = product.price;
      responseProduct.category = category;

      return responseProduct;
    });

    const orderDetail = new ResponseOrderDetailDto();
    orderDetail.id = order.orderDetail.id;
    orderDetail.price = order.orderDetail.price;
    orderDetail.products = products;

    const responseOrder = new ResponseOrderDto();
    responseOrder.id = order.id;
    responseOrder.user = user;
    responseOrder.orderDetail = orderDetail;

    return responseOrder;
  }
}
