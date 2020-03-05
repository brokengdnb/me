# ME - Markdown Editor

> ...just another .md editor but just for me! 

[![preview](https://github.com/brokengdnb/me/blob/master/about.png?raw=true "preview")](https://github.com/brokengdnb/me "preview")

- Forked from [editor.md (Live preview)](https://pandao.github.io/editor.md/en.html "editor.md (Live preview)")

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

- markdowneditor-1.0.0.dmg (~80MB) ===> App (~171MB)

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
- ~~Windows~~  => rcedit.exe failed with exit code null *(So I don't have one and I will **NOT** support this platform. Call Microsoft service in India)*

## Errors

> Packaging app for platform win32 x64 using electron v8.0.3
Could not find "wine64" on your system.

### PLAN A:
```bash
brew install homebrew/cask-versions/wine-devel
```

> Error: Cask 'wine-devel' requires XQuartz/X11, which can be installed using Homebrew Cask by running:

```bash
brew cask install xquartz
```

> rcedit.exe failed with exit code null.
>> ...that was critical hit and I start compile that from source code

### PLAN B:

[Follow white rabbit and good luck!](https://apple.stackexchange.com/a/376427 "Follow white rabbit and good luck!")

> checking whether bison is recent enough... no
configure: error: Your bison version is too old.
Please install bison version 3.0 or newer.

```bash
brew install bison
brew link bison --force

# Warning: Refusing to link macOS-provided software: bison
echo 'export PATH="/usr/local/opt/bison/bin:$PATH"' >> ~/.bash_profile

# For compilers to find bison you may need to set:
export LDFLAGS="-L/usr/local/opt/bison/lib"
```


## License

[![License](http://img.shields.io/:license-mit-green.svg?style=flat-square)](http://badges.mit-license.org)

    