# Url-loader vs File-loader Webpack

url-loader will encode files to base64 and include them inline rather than having them loaded as separate files with another request.

A base64 encoded file may look something like this:

```
data:;base64,aW1wb3J0IFJlYWN0IGZ...
```

This would be added into your bundle.

file-loader will copy files to the build folder and insert links to them where they are included. url-loader will encode entire file bytes content as base64 and insert base64-encoded content where they are included. So there is no separate file.

They are mostly both used for media assets such as images. Mostly images.

This technique may make page load faster because there are fewer http-requests to the server to download files.

## links

- [Url-loader vs File-loader Webpack](https://stackoverflow.com/questions/49080007/url-loader-vs-file-loader-webpack)
