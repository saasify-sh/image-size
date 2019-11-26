# image-size

> Simple API for detecting image dimensions

This SaaS project was bootstrapped with [Saasify](https://saasify.sh).

## Supporting OSS

This project provides a hosted API for [image-size](https://github.com/image-size/image-size).

**We set aside the majority of any revenue generated from this API for the original OSS developers**. If this is you, please [get in touch](https://saasify.sh/#/support) to setup payouts and answer any questions you may have.

## Hosted API

<a href="https://dev_image-size.saasify.sh">
  <img
    src="https://badges.saasify.sh"
    height="40"
    alt="Use Hosted API"
  />
</a>

## Quick Start

Welcome to the quick-start! There is currently only one API, which is detailed below via `cURL`.

Also be sure to check out the full reference of [API endpoints](https://dev_image-size.saasify.sh/docs#tag/service).

### Getting image size from a URL

```sh
curl -X POST 'https://api.saasify.sh/1/call/dev/image-size/sizebyurl' \
  -H 'content-type: application/json' \
  -d '{
    "url": "https://upload.wikimedia.org/wikipedia/commons/2/23/Close_up_of_a_black_domestic_cat.jpg"
  }'
```

Returns the dimensions of the image

```json
{
  "height": 4032,
  "orientation": 1,
  "width": 3024,
  "type": "jpg"
}
```

### Supported formats

- BMP
- CUR
- DDS
- GIF
- ICNS
- ICO
- JPEG
- KTX
- PNG
- PNM (PAM, PBM, PFM, PGM, PPM)
- PSD
- SVG
- TIFF
- WebP

## License

MIT © [image-size](https://github.com/image-size)
