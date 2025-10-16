import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
export declare class CategoriesRepository {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<CategoryEntity>);
    getCategories(): Promise<CategoryEntity[]>;
    getCategiryByName(categoryName: string): Promise<CategoryEntity>;
    getCategiryById(id: string): Promise<CategoryEntity>;
    addCategory(category: CategoryEntity): Promise<CategoryEntity>;
}
