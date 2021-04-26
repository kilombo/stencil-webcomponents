import { Component, Prop, h, State, Watch } from '@stencil/core';

@Component({
  tag: 'pt-promoted-products',
  styleUrl: 'pt-promoted-products.css',
  shadow: true,
})
export class PTPromotedProducts {
  @Prop() products: string;
  @State() internalProducts: Array<any>;

  componentWillLoad() {
    this.parseProducts();
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
          {this.internalProducts.map(product => (
            <li class="ptPromotedProducts-item">
              <h1>{product.title}</h1>
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
