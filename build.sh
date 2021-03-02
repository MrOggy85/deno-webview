#!/bin/bash

deno compile \
  --target x86_64-apple-darwin \
  --allow-read=$HOME/Library/Caches/deno/plug/https/github.com,.env,.env.defaults \
  --allow-write=$HOME/Library/Caches/deno/plug/https/github.com \
  --allow-plugin=$HOME/Library/Caches/deno/plug/https/github.com/e621464ec6245a0d8e91a6b85bccf081940c25ad052c1e7f2a946dd581dee02c.dylib \
  --allow-net=github.com,github-releases.githubusercontent.com \
  --allow-env \
  --unstable \
  ./main.ts
