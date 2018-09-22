#!/usr/bin/env bash

rm -rf dist
npm run build
rm -rf ../ucladevx.github.io/*.{js,css}
cp -r dist/* ../ucladevx.github.io
