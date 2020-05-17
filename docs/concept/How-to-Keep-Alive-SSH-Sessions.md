# How to Keep Alive SSH Sessions

This article describes how to keep SSH connections alive. If you experience problems when using SSH ,such as dropped or unresponseive connections, you may need to adjust some settings in your SSH client.

`~/.ssh/config`

```
Host *
    ServerAliveInterval 10
```

## links

- [How to Keep Alive SSH Sessions](https://patrickmn.com/aside/how-to-keep-alive-ssh-sessions/)
