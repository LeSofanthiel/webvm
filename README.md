# WebVM

This repository is one of my many attempts at getting X11 working in WebVM. You can access it [here.](https://lesofanthiel.github.io/webvm/)

<img src="/assets/welcome_to_WebVM_alpine_2024.png" width="90%">

## What is WebVM?

WebVM is a server-less virtual environment running fully client-side in HTML5/WebAssembly. It's designed to be Linux ABI-compatible and runs an unmodified Debian distribution including many native development toolchains.

WebVM is powered by the **CheerpX** virtualization engine, which provides:

- x86-to-WebAssembly JIT compiler
- Virtual block-based file system
- Linux syscall emulator
- Safe, sandboxed client-side execution

## License

WebVM is released under the Apache License, Version 2.0.

You are welcome to use, modify, and redistribute the contents of this repository.

The public CheerpX deployment is provided **as-is** and is **free to use** for technological exploration, testing and use by individuals. Any other use by organizations, including non-profit, academia and the public sector, requires a license. Downloading a CheerpX build for the purpose of hosting it elsewhere is not permitted without a commercial license.

Read more [here](https://cheerpx.io/docs/licensing) about our licensing practices.

If you want to build a product on top of CheerpX/WebVM, please see our other licensing options: [CheerpX licensing](https://cheerpx.io/licensing) or get in touch: sales@leaningtech.com
