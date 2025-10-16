import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { UpdateUserDto } from './dto/update.user.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/modules/auth/roles.enum';
import { RolesGuard } from 'src/guards/roles.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBearerAuth()
  @Get('test-admin')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  getRoles() {
    return 'test de acceso con roles ok';
  }

  @ApiOperation({
    summary: 'Obtener todos los usuarios',
    description:
      'Devuelve una lista completa de todos los usuarios registrados. Solo administradores',
  })
  @ApiBearerAuth()
  @Get()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  getUsers() {
    return this.usersService.getUsers();
  }

  @ApiOperation({
    summary: 'Obtener usuarios paginados',
    description:
      'Devuelve una lista de usuarios con paginación. Permite especificar página y cantidad de elementos por página. Accesible para admins y usuarios autenticados',
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
  getUserByPage(@Query() query: { page?: string; limit?: string }) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 5;
    return this.usersService.getUserByPage(page, limit);
  }

  @ApiOperation({
    summary: 'Obtener usuario por ID',
    description:
      'Obtiene los detalles completos de un usuario específico. Requiere ser admin o usuario autenticado',
  })
  @ApiParam({
    name: 'id',
    description: 'ID único del usuario (UUID)',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    type: 'string',
  })
  @ApiBearerAuth()
  @Get(':id')
  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(AuthGuard, RolesGuard)
  getUserById(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.getUserById(id);
  }

  @ApiOperation({
    summary: 'Actualizar usuario',
    description:
      'Actualiza los datos de un usuario específico. Solo administradores pueden realizar esta acción',
  })
  @ApiParam({
    name: 'id',
    description: 'ID único del usuario a actualizar (UUID)',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    type: 'string',
  })
  @ApiBearerAuth()
  @Put(':id')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() user: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, user);
  }

  @ApiOperation({
    summary: 'Eliminar usuario',
    description:
      'Elimina un usuario específico de la base de datos. Solo administradores pueden realizar esta acción',
  })
  @ApiParam({
    name: 'id',
    description: 'ID único del usuario a eliminar (UUID)',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    type: 'string',
  })
  @ApiBearerAuth()
  @Delete(':id')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.deleteUser(id);
  }
}
