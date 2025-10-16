import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { RequestProductsDto } from './dto/request.products.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<import("./dto/response.produscts.dto").ResponseProductsDto>;
    getProductByPage(query: {
        page?: string;
        limit?: string;
    }): Promise<import("./dto/response.produscts.dto").ResponseProductsDto>;
    getProductById(id: string): Promise<import("./dto/response.product.dto").ResponseProductDto>;
    createProduct(product: CreateProductDto): Promise<import("./dto/response.product.dto").ResponseProductDto>;
    createProducts(productsDto: RequestProductsDto): Promise<import("./dto/response.produscts.dto").ResponseProductsDto>;
    updateProduct(id: string, product: UpdateProductDto): Promise<import("./dto/response.message.product.dto").ResponseMessageProductDto>;
    deleteProduct(id: string): Promise<import("./dto/response.message.product.dto").ResponseMessageProductDto>;
}
