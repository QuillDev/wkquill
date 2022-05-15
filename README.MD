# WKQuill a TS WaniKani Wrapper.

## Currently under construction! Use at your own risk!

## Usage Example

```ts
(async () => {
    const client = new WaniClient(process.env.WANI_TOKEN);
    const response = await client.getAllSRSStages()
    console.log(response);
})();
```