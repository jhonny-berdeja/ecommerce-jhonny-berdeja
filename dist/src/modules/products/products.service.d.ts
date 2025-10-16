import { ProductsRepository } from './products.repository';
import { ProductMapper } from './product.mapper';
import { ResponseProductDto } from './dto/response.product.dto';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { CategoriesService } from 'src/modules/categories/category.service';
import { ResponseProductsDto } from './dto/response.produscts.dto';
import { ResponseMessageProductDto } from './dto/response.message.product.dto';
export declare class ProductsService {
    private productsRepository;
    private productMapper;
    private categoriesService;
    constructor(productsRepository: ProductsRepository, productMapper: ProductMapper, categoriesService: CategoriesService);
    getProducts(): Promise<ResponseProductsDto>;
    getProductById(id: string): Promise<ResponseProductDto>;
    getProductByPage(page: number, limit: number): Promise<ResponseProductsDto>;
    addProduct(product: CreateProductDto): Promise<ResponseProductDto>;
    addProducts(products: CreateProductDto[]): Promise<ResponseProductsDto>;
    updateProduct(id: string, product: UpdateProductDto): Promise<ResponseMessageProductDto>;
    deleteProduct(id: string): Promise<ResponseMessageProductDto>;
}
