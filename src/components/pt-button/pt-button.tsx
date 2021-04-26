import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'pt-button',
    styleUrl: 'pt-button.css',
    shadow: true,
})
export class PTButton {
    @Prop() text: string;

    render() {
        return <button class='button'>{this.text}</button>;
    }
}
