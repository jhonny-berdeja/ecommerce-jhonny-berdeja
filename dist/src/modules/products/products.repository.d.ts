import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
export declare class ProductsRepository {
    private productsRepository;
    constructor(productsRepository: Repository<ProductEntity>);
    getProducts(): Promise<ProductEntity[]>;
    getProductById(id: string): Promise<ProductEntity>;
    getProductsWithStockGreaterThanZero(produstsId: string[]): Promise<ProductEntity[]>;
    calculateTotalCost(products: ProductEntity[]): number;
    subtractOneToStock(product: ProductEntity): Promise<ProductEntity>;
    getProductByPage(page: number, limit: number): Promise<ProductEntity[]>;
    addProduct(product: ProductEntity): Promise<ProductEntity>;
    updateProduct(id: string, product: ProductEntity): Promise<ProductEntity>;
    deleteProduct(id: string): Promise<ProductEntity>;
}
