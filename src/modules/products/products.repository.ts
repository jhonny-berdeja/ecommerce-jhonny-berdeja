import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private productsRepository: Repository<ProductEntity>,
  ) {}

  async getProducts(): Promise<ProductEntity[]> {
    return await this.productsRepository.find({
      relations: ['category'],
    });
  }

  async getProductById(id: string): Promise<ProductEntity> {
    const product = await this.productsRepository.findOne({
      where: { id },
      relations: ['category'],
    });
    if (!product) {
      throw new BadRequestException(`No existe un producto con el id ${id}`);
    }
    return product;
  }

  async getProductsWithStockGreaterThanZero(
    produstsId: string[],
  ): Promise<ProductEntity[]> {
    const productPromises = produstsId.map(
      async (productId) =>
        await this.productsRepository.findOneBy({ id: productId }),
    );
    const productsEntities = await Promise.all(productPromises);
    const validProducts = productsEntities.filter(
      (product) => product && product.stock > 0,
    );
    return validProducts as ProductEntity[];
  }

  calculateTotalCost(products: ProductEntity[]): number {
    return products.reduce((sum, product) => {
      return sum + Number(product.price);
    }, 0);
  }

  async subtractOneToStock(product: ProductEntity): Promise<ProductEntity> {
    const productUpdate = new ProductEntity();
    productUpdate.stock = product.stock - 1;
    return await this.updateProduct(product.id, productUpdate);
  }

  async getProductByPage(
    page: number,
    limit: number,
  ): Promise<ProductEntity[]> {
    const skip = (page - 1) * limit;
    const [products, total] = await this.productsRepository.findAndCount({
      skip: skip,
      take: limit,
      relations: ['category'],
    });
    console.log(`...Page: ${page} - Limit: ${total}`);
    return products;
  }

  async addProduct(product: ProductEntity): Promise<ProductEntity> {
    const productExist = await this.productsRepository.findOneBy({
      name: product.name,
    });
    if (productExist) {
      throw new BadRequestException(
        `El producto con name ${product.name} ya existe`,
      );
    }
    const newProduct = this.productsRepository.create(product);
    const productSaved = this.productsRepository.save(newProduct);
    return this.getProductById((await productSaved).id);
  }

  async updateProduct(
    id: string,
    product: ProductEntity,
  ): Promise<ProductEntity> {
    const productExist = await this.productsRepository.findOneBy({ id });
    if (!productExist) {
      throw new Error(`No existe un producto con el id ${id}`);
    }
    const productUpdated: ProductEntity = { ...product, id: productExist.id };
    return this.productsRepository.save(productUpdated);
  }

  async deleteProduct(id: string): Promise<ProductEntity> {
    const productExist = await this.productsRepository.findOneBy({ id });
    if (!productExist) {
      throw new Error(`No existe un producto con el id ${id}`);
    }
    const productDeleted: ProductEntity = { ...productExist };
    await this.productsRepository.remove(productExist);
    return productDeleted;
  }
}
