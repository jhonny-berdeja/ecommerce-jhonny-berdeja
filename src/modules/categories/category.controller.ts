import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RequestCategoryDto } from './dto/request.category.dto';
import { CategoriesService } from './category.service';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/modules/auth/roles.enum';
import { AuthGuard } from 'src/guards/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { RequestCategoriesDto } from './dto/request.categories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiOperation({
    summary: 'Obtener todas las categorías',
    description:
      'Devuelve una lista de todas las categorías disponibles. Accesible para admins y usuarios autenticados',
  })
  @Get()
  getCategories() {
    return this.categoriesService.getCategories();
  }

  @ApiOperation({
    summary: 'Crear una categoría',
    description:
      'Crea una nueva categoría en la base de datos. Solo administradores',
  })
  @ApiBearerAuth()
  @Post('create-category')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  createCategory(@Body() category: RequestCategoryDto) {
    return this.categoriesService.createCategory(category);
  }

  @ApiOperation({
    summary: 'Crear múltiples categorías',
    description: 'Crea varias categorías de una vez. Solo administradores',
  })
  @ApiBearerAuth()
  @Post('create-categories')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  createCategories(@Body() requestCategories: RequestCategoriesDto) {
    return this.categoriesService.createCategories(requestCategories);
  }
}
