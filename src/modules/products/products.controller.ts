import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { Role } from 'src/modules/auth/roles.enum';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { RequestProductsDto } from './dto/request.products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({
    summary: 'Obtener todos los productos',
    description:
      'Devuelve una lista completa de todos los productos disponibles. Accesible para admins y usuarios autenticados',
  })
  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @ApiOperation({
    summary: 'Obtener productos paginados',
    description:
      'Devuelve una lista de productos con paginación. Permite especificar página y cantidad de elementos por página',
  })
  @ApiBearerAuth()
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Número de página deseado (ej: 1)',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Cantidad de elementos por página (ej: 10)',
    example: 5,
  })
  @Get('page')
  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(AuthGuard, RolesGuard)
  getProductByPage(@Query() query: { page?: string; limit?: string }) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 5;
    return this.productsService.getProductByPage(page, limit);
  }

  @ApiOperation({
    summary: 'Obtener producto por ID',
    description:
      'Obtiene los detalles completos de un producto específico. Accesible para admins y usuarios autenticados',
  })
  @ApiParam({
    name: 'id',
    description: 'ID único del producto (UUID)',
    example: 'b2c3d4e5-f6g7-8901-bcde-f12345678901',
    type: 'string',
  })
  @ApiBearerAuth()
  @Get(':id')
  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(AuthGuard, RolesGuard)
  getProductById(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.getProductById(id);
  }

  @ApiOperation({
    summary: 'Crear un nuevo producto',
    description:
      'Crea un nuevo producto en el catálogo. Solo administradores pueden realizar esta acción',
  })
  @ApiBearerAuth()
  @Post()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  createProduct(@Body() product: CreateProductDto) {
    return this.productsService.addProduct(product);
  }

  @ApiOperation({
    summary: 'Crear múltiples productos',
    description:
      'Crea varios productos de una vez en el catálogo. Solo administradores pueden realizar esta acción',
  })
  @ApiBearerAuth()
  @Post('create-products')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  createProducts(@Body() productsDto: RequestProductsDto) {
    return this.productsService.addProducts(productsDto.products);
  }

  @ApiOperation({
    summary: 'Actualizar producto',
    description:
      'Actualiza los datos de un producto específico. Solo administradores pueden realizar esta acción',
  })
  @ApiBearerAuth()
  @Put(':id')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  updateProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() product: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(id, product);
  }

  @ApiOperation({
    summary: 'Eliminar producto',
    description:
      'Elimina un producto específico de la base de datos. Solo administradores pueden realizar esta acción',
  })
  @ApiBearerAuth()
  @Delete(':id')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  deleteProduct(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.deleteProduct(id);
  }
}
