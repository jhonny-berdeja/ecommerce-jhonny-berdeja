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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
const product_entity_1 = require("./product.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ProductsRepository = class ProductsRepository {
    productsRepository;
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async getProducts() {
        return await this.productsRepository.find({
            relations: ['category'],
        });
    }
    async getProductById(id) {
        const product = await this.productsRepository.findOne({
            where: { id },
            relations: ['category'],
        });
        if (!product) {
            throw new common_1.BadRequestException(`No existe un producto con el id ${id}`);
        }
        return product;
    }
    async getProductsWithStockGreaterThanZero(produstsId) {
        const productPromises = produstsId.map(async (productId) => await this.productsRepository.findOneBy({ id: productId }));
        const productsEntities = await Promise.all(productPromises);
        const validProducts = productsEntities.filter((product) => product && product.stock > 0);
        return validProducts;
    }
    calculateTotalCost(products) {
        return products.reduce((sum, product) => {
            return sum + Number(product.price);
        }, 0);
    }
    async subtractOneToStock(product) {
        const productUpdate = new product_entity_1.ProductEntity();
        productUpdate.stock = product.stock - 1;
        return await this.updateProduct(product.id, productUpdate);
    }
    async getProductByPage(page, limit) {
        const skip = (page - 1) * limit;
        const [products, total] = await this.productsRepository.findAndCount({
            skip: skip,
            take: limit,
            relations: ['category'],
        });
        console.log(`...Page: ${page} - Limit: ${total}`);
        return products;
    }
    async addProduct(product) {
        const productExist = await this.productsRepository.findOneBy({
            name: product.name,
        });
        if (productExist) {
            throw new common_1.BadRequestException(`El producto con name ${product.name} ya existe`);
        }
        const newProduct = this.productsRepository.create(product);
        const productSaved = this.productsRepository.save(newProduct);
        return this.getProductById((await productSaved).id);
    }
    async updateProduct(id, product) {
        const productExist = await this.productsRepository.findOneBy({ id });
        if (!productExist) {
            throw new Error(`No existe un producto con el id ${id}`);
        }
        const productUpdated = { ...product, id: productExist.id };
        return this.productsRepository.save(productUpdated);
    }
    async deleteProduct(id) {
        const productExist = await this.productsRepository.findOneBy({ id });
        if (!productExist) {
            throw new Error(`No existe un producto con el id ${id}`);
        }
        const productDeleted = { ...productExist };
        await this.productsRepository.remove(productExist);
        return productDeleted;
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.ProductEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map