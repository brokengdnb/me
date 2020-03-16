# ME - Markdown Editor

> ...just another .md editor but just for me!

[![preview](https://github.com/brokengdnb/me/blob/master/about.png?raw=true "preview")](https://github.com/brokengdnb/me "preview")

- Forked from [editor.md (Live preview)](https://pandao.github.io/editor.md/en.html "editor.md (Live preview)") and bundled with Electron to act like off-line app... on my Mac. Just an idea but it works very well on daily use.
- WHY? Because I cannot find any Markdown Editor in dark mode but show me that results normaly like the original page (Git). Live preview with double scroll, all needed buttons like WORD or textEdit. Editor who remember (undo) and all those things... which I don't and who will make it done... for me. So that's ME.

---

- [Installation](#installation)
- [Downloads](#downloads)
- [Features](#features)
- [Documentation](#documentation)
- [Support](#support)
- [Errors](#errors)
- [License](#license)

## Installation

```bash
git clone https://github.com/brokengdnb/me && cd me/
npm install
npm run start
```
> simple as that... or

## Downloads

[![apple-app](https://github.com/brokengdnb/me/blob/master/appstore.png?raw=true "apple-app")](https://github.com/brokengdnb/me/releases "apple-app")

- [markdowneditor-1.0.0.dmg (~80MB) ===> App (~171MB)](https://github.com/brokengdnb/me/releases/tag/v1.0-alfa)

> MD5
- 9433dd529c6efa5e7aaf5b39ac9b9975

> shasum 256
- 4082255549cfc97371d0c342721c892ee2b4352564e43db2205d6606c7614325



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

- **OS X (beste)**
- Linux (ok)
- ~~Windows~~  => rcedit.exe failed with exit code null *(So I don't have one and I will **NOT** support this platform. Call Microsoft service in India or your local IT "experts")*

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

If you are Mac or Linux user = NO problem.


## License

[![License](http://img.shields.io/:license-mit-green.svg?style=flat-square)](http://badges.mit-license.org)

    