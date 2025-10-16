import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './order.service';
import { RequestOrderDto } from './dto/request.order.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Role } from 'src/modules/auth/roles.enum';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @ApiOperation({
    summary: 'Obtener orden por ID',
    description:
      'Obtiene los detalles completos de una orden específica incluyendo usuario, productos y categorías. Accesible para admins y usuarios autenticados',
  })
  @ApiBearerAuth()
  @Get(':id')
  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(AuthGuard, RolesGuard)
  getOrderById(@Param('id', ParseUUIDPipe) id: string) {
    return this.ordersService.getOrderById(id);
  }

  @ApiOperation({
    summary: 'Crear una nueva orden',
    description:
      'Crea una nueva orden con los productos especificados. Solo admins y usuarios autenticados. Descuenta automáticamente del stock',
  })
  @ApiBearerAuth()
  @Post('create-order')
  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(AuthGuard, RolesGuard)
  addOrder(@Body() order: RequestOrderDto) {
    return this.ordersService.addOrder(order);
  }
}
