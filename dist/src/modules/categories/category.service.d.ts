import { RequestCategoryDto } from './dto/request.category.dto';
import { CategoriesRepository } from './category.repository';
import { CategoryMapper } from './category.mapper';
import { ResponseCategoriesDto } from './dto/response.categories.dto';
import { RequestCategoriesDto } from './dto/request.categories.dto';
import { ResponseCategoryDto } from 'src/modules/products/dto/response.category.dto';
export declare class CategoriesService {
    private categoriesRepository;
    private categoryMapper;
    constructor(categoriesRepository: CategoriesRepository, categoryMapper: CategoryMapper);
    getCategories(): Promise<ResponseCategoriesDto>;
    getIdByCategoryName(categoryName: string): Promise<string>;
    getIdByCategoryId(id: string): Promise<string>;
    createCategory(category: RequestCategoryDto): Promise<ResponseCategoryDto>;
    createCategories(requestCategories: RequestCategoriesDto): Promise<ResponseCategoriesDto>;
}
