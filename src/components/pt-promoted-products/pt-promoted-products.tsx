import { Component, Prop, h, State, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'pt-promoted-products',
  styleUrl: 'pt-promoted-products.css',
  shadow: true,
})
export class PTPromotedProducts {
  @Prop() products: string;
  @State() internalProducts: Array<any>;
  @Event() productClicked: EventEmitter<any>;

  componentWillLoad() {
    this.parseProducts();
  }

  productClickedHandler(product: object) {
    console.log('productClicked emmited', product);
    this.productClicked.emit(product);
  }

  @Watch('products')
  parseProducts() {
    if (this.products) {
      let newJson = this.products.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
      newJson = newJson.replace(/'/g, '"');
      this.internalProducts = JSON.parse(newJson);
    }
  }

  render() {
    return (
      <section>
        <ul class="ptPromotedProducts">
          {this.internalProducts && this.internalProducts.map(product => (
            <li class="ptPromotedProducts-item" key={product.id} onClick={()=>{this.productClickedHandler(product)}}>
              <h1>{product.title}</h1>
              <div>{product.price}{product.currencySimbol}</div>
            </li>
          ))}
        </ul>
        <small>
          <pre>{this.products}</pre>
        </small>
      </section>
    );
  }
}
