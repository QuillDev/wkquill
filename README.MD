# WKQuill a TS WaniKani Wrapper.

## Currently under construction! Use at your own risk!

[![npm version](https://badge.fury.io/js/wkquill.svg)](https://badge.fury.io/js/wkquill)

## Installation
```shell
#yarn 
yarn add wkquill
#npm
npm install wkquill
```

## Usage Example
```ts
(async () => {
    const client = new WaniClient(process.env.WANI_TOKEN);
    const response = await client.getAllSRSStages()
    console.log(response);
})();
```
