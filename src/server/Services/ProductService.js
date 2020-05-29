class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
      }

     
    
      async create(product) {
        const data = await this.productModel.create(product);
        product = {
          name: data.name,
          price: data.price,
          description: data.description,
          quantity: data.quantity
        };
    
        return {
            product
        };
      }
}

export default ProductService;