"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const category_repository_1 = require("./category.repository");
const category_mapper_1 = require("./category.mapper");
const response_categories_dto_1 = require("./dto/response.categories.dto");
let CategoriesService = class CategoriesService {
    categoriesRepository;
    categoryMapper;
    constructor(categoriesRepository, categoryMapper) {
        this.categoriesRepository = categoriesRepository;
        this.categoryMapper = categoryMapper;
    }
    async getCategories() {
        const categories = await this.categoriesRepository.getCategories();
        return this.categoryMapper.mapToResponseCategoriesDto(categories);
    }
    async getIdByCategoryName(categoryName) {
        const category = await this.categoriesRepository.getCategiryByName(categoryName);
        return category.id;
    }
    async getIdByCategoryId(id) {
        const category = await this.categoriesRepository.getCategiryById(id);
        return category.name;
    }
    async createCategory(category) {
        const categoryEntity = this.categoryMapper.mapToCategotyEntity(category);
        const categoryEntityCreated = await this.categoriesRepository.addCategory(categoryEntity);
        return this.categoryMapper.mapToResponseCategoryDto(categoryEntityCreated);
    }
    async createCategories(requestCategories) {
        const categoriesCreated = await Promise.all(requestCategories.categories.map(async (category) => {
            return await this.createCategory(category);
        }));
        const responseCategoriesDto = new response_categories_dto_1.ResponseCategoriesDto();
        responseCategoriesDto.categories = categoriesCreated;
        return responseCategoriesDto;
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_repository_1.CategoriesRepository,
        category_mapper_1.CategoryMapper])
], CategoriesService);
//# sourceMappingURL=category.service.js.map