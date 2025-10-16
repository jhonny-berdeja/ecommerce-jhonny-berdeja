import { RequestCategoryDto } from './dto/request.category.dto';
import { CategoriesService } from './category.service';
import { RequestCategoriesDto } from './dto/request.categories.dto';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    getCategories(): Promise<import("./dto/response.categories.dto").ResponseCategoriesDto>;
    createCategory(category: RequestCategoryDto): Promise<import("../products/dto/response.category.dto").ResponseCategoryDto>;
    createCategories(requestCategories: RequestCategoriesDto): Promise<import("./dto/response.categories.dto").ResponseCategoriesDto>;
}
