# github-slug-cli
CLI wrapper for [finnp/github-slug](https://github.com/finnp/github-slug)

## Installation
```shell
npm install github-slug-cli # install
```

## Usage
```shell
❯ github-slug --help

  Usage: github-slug [options] [path="."]

  Options:

    -h, --help             output usage information
    -V, --version          output the version number
    -f, --fail             fail if no slug can be determined from [path], default to false
    -r, --remote <remote>  git <remote> of project in [path] to get the slug for, defaults to origin
```

## Examples
```shell
# Returns the slug for the current directory
❯ github-slug
marionebl/github-slug-cli

# Silently fails
❯ github-slug ../

# Fails violently
❯ github-slug -f ../
Error: no gitconfig to be found at /Users/marneb/Projekte/labs
    at /Users/marneb/Projekte/labs/github-slug-cli/node_modules/gitconfiglocal/index.js:8:27
    at /Users/marneb/Projekte/labs/github-slug-cli/node_modules/gitconfiglocal/index.js:41:48
    at FSReqWrap.cb [as oncomplete] (fs.js:216:19)

# Use an alternative origin
❯ github-slug -r fork
knisterpeter/github-slug-cli
```
