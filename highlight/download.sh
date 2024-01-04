#!/usr/bin/env bash

# https://cdnjs.com/libraries/highlight.js/10.7.3
VERSION=10.7.3

curl -LO "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/$VERSION/highlight.min.js"

mkdir -p languages
mkdir -p styles

(cd languages && curl -LO "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/$VERSION/languages/bash.min.js")
(cd languages && curl -LO "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/$VERSION/languages/dockerfile.min.js")
(cd languages && curl -LO "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/$VERSION/languages/javascript.min.js")
(cd languages && curl -LO "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/$VERSION/languages/typescript.min.js")
(cd languages && curl -LO "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/$VERSION/languages/shell.min.js")
(cd languages && curl -LO "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/$VERSION/languages/xml.min.js")
(cd styles && curl -LO "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/$VERSION/styles/night-owl.min.css")
