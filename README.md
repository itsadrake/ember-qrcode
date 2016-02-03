# Ember-qrcode

An Ember addon that draws QR codes.

## Installation and usage

Install the addon with `ember install ember-qrcode`.
To place a QR code element (by default a `canvas.qr-code`), use the `{{qr-code}}` component.

The component has the following properties:

- `data`: the data string to encode
- `width`, `height`: passed directly to the `canvas` attributes with the same name
- `light`, `dark`: the hex colours for light and dark cells respectively (`#FFFFFF` and `#000000` by default)

### Example

`{{qr-code data="Hello world" light="#EEEEFF" dark="#330000"}}`

## Licence

The MIT licence
