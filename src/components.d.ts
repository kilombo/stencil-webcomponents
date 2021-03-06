/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PtButton {
        "text": string;
    }
    interface PtPromotedProducts {
        "products": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPtButtonElement extends Components.PtButton, HTMLStencilElement {
    }
    var HTMLPtButtonElement: {
        prototype: HTMLPtButtonElement;
        new (): HTMLPtButtonElement;
    };
    interface HTMLPtPromotedProductsElement extends Components.PtPromotedProducts, HTMLStencilElement {
    }
    var HTMLPtPromotedProductsElement: {
        prototype: HTMLPtPromotedProductsElement;
        new (): HTMLPtPromotedProductsElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "pt-button": HTMLPtButtonElement;
        "pt-promoted-products": HTMLPtPromotedProductsElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PtButton {
        "text"?: string;
    }
    interface PtPromotedProducts {
        "onProductClicked"?: (event: CustomEvent<any>) => void;
        "products"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "pt-button": PtButton;
        "pt-promoted-products": PtPromotedProducts;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "pt-button": LocalJSX.PtButton & JSXBase.HTMLAttributes<HTMLPtButtonElement>;
            "pt-promoted-products": LocalJSX.PtPromotedProducts & JSXBase.HTMLAttributes<HTMLPtPromotedProductsElement>;
        }
    }
}
