"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryMapper = void 0;
const category_entity_1 = require("./category.entity");
const response_categories_dto_1 = require("./dto/response.categories.dto");
const response_category_dto_1 = require("./dto/response.category.dto");
function mapToResponseCategoryDto(category) {
    const resoponseCategoryDto = new response_category_dto_1.ResponseCategoryDto();
    if (category.id)
        resoponseCategoryDto.id = category.id;
    if (category.name)
        resoponseCategoryDto.name = category.name;
    return resoponseCategoryDto;
}
function mapToResponseCategoriesDto(categories) {
    const reponseCategories = categories.map((category) => mapToResponseCategoryDto(category));
    const responseCategoriesDto = new response_categories_dto_1.ResponseCategoriesDto();
    responseCategoriesDto.categories = reponseCategories;
    return responseCategoriesDto;
}
function mapToCategotyEntity(category) {
    const categoryEntity = new category_entity_1.CategoryEntity();
    if (category.name)
        categoryEntity.name = category.name;
    return categoryEntity;
}
class CategoryMapper {
    mapToResponseCategoriesDto(categories) {
        return mapToResponseCategoriesDto(categories);
    }
    mapToResponseCategoryDto(category) {
        return mapToResponseCategoryDto(category);
    }
    mapToCategotyEntity(category) {
        return mapToCategotyEntity(category);
    }
}
exports.CategoryMapper = CategoryMapper;
//# sourceMappingURL=category.mapper.js.map