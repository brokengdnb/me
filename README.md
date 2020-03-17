# ME - Markdown Editor

> ...just another .md editor but just for me!

[![preview](https://github.com/brokengdnb/me/blob/master/about.png?raw=true "preview")](https://github.com/brokengdnb/me "preview")

- WHY? Because I cannot find any Markdown Editor in dark mode but show me that results normaly like the original page (Git). Live preview with double scroll, all needed buttons like WORD or textEdit. Editor who remember (undo) and all those things... which I don't and who will make it done... for me. So that's ME.
- Forked from [editor.md (Live preview)](https://pandao.github.io/editor.md/en.html "editor.md (Live preview)") and bundled with Electron to act like off-line app... on my Mac. Just an idea but it works very well on daily use.

---

- [Demo](#demo)
- [Downloads](#downloads)
- [Compilation](#compilation)
- [Features](#features)
- [Documentation](#documentation)
- [Support](#support)
- [Errors](#errors)
- [License](#license)

## Demo

[![demo](https://github.com/brokengdnb/me/blob/master/demo.gif?raw=true "demo")](https://github.com/brokengdnb/me "demo")

## Downloads

[![apple-app](https://github.com/brokengdnb/me/blob/master/appstore.png?raw=true "apple-app")](https://github.com/brokengdnb/me/releases "apple-app")

- [ME-1.1.0.dmg (~70MB) ===> App (~172MB)](https://github.com/brokengdnb/me/releases/tag/v1.1)

> MD5
- abcd9e60072945b7b9aaed886d9638e8

## Compilation

```bash
git clone https://github.com/brokengdnb/me && cd me/
npm install
npm run start
```
> simple as that... 

## Features

- Dark theme for longer and comfortable time
- Fullscreen Do-Not-Disturb style
- App cannot be closed, quited or linked into another page => safety feature for accidentally quiting app. For quit just kill that run command or force kill by alt.
- Support Standard Markdown / CommonMark and GFM (GitHub Flavored Markdown)
- Full-featured: Real-time Preview, Image (cross-domain), Preformatted text/Code blocks/Tables insert, Code fold, Search replace, Themes, Multi-languages, L18n, HTML entities, Code syntax highlighting...
- Markdown Extras : Support ToC (Table of Contents), Task lists, @Links...
- Compatible with all major systems
- Support identification, interpretation, fliter of the HTML tags
- Support TeX (LaTeX expressions, Based on KaTeX), Flowchart and Sequence Diagram of Markdown extended syntax

## Documentation

[Follow the original project page.](http://editor.md.ipandao.com/examples/index.html "Follow the original project page.")

## Support

- **OS X (tasted on 10.14.6)**
- Linux
- ~~Windows~~  => rcedit.exe failed with exit code null *(So I don't have one and I will **NOT** support this platform. Call Microsoft service in India or your local IT "experts" because I'll not do that)*

## Errors

> Packaging app for platform win32 x64 using electron v8.0.3
Could not find "wine64" on your system.

### PLAN A:

[Follow white rabbit, good luck!](https://apple.stackexchange.com/a/376427 "Follow white rabbit, good luck!")

### PLAN B:

```bash
brew cask install wine-stable
# autoinstall
winecfg
```

That will solve the problem of creating App for Microsoft Windows but still that .exe didn't wokr out nether. After who days of closed code and useless logs I gave on Mincosoft = NO windows.

BUT!!! If you are Mac or Linux user = NO problem.


## License

The MIT License.

Copyright (c) 2020 BrokenG