#!/usr/bin/env bash

set -e -o pipefail

echo "Regenerating Protocol Buffers"

# Directory to write generated code to (.js and .d.ts files)
JS_OUT_DIR="./build/generated"
TS_OUT_DIR="./generated"

mkdir -p $TS_OUT_DIR
mkdir -p $JS_OUT_DIR

# Generate node code.
$PWD/node_modules/grpc-tools/bin/protoc \
    --js_out=import_style=commonjs,binary:$TS_OUT_DIR \
    --js_out=import_style=commonjs,binary:$JS_OUT_DIR \
    --proto_path=$PWD/xpring-common-protocol-buffers/proto \
    $PWD/xpring-common-protocol-buffers/**/*.proto

# Generate tyepscript declaration files.
$PWD/node_modules/grpc-tools/bin/protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=$TS_OUT_DIR \
    --ts_out=$JS_OUT_DIR \
    --proto_path=$PWD/xpring-common-protocol-buffers/proto \
    $PWD/xpring-common-protocol-buffers/**/*.proto

# Cleanup any errant gRPC protocol buffers.
rm $JS_OUT_DIR/*grpc*
rm $TS_OUT_DIR/*grpc*

echo "All done!"
