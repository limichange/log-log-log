# Rust-Fixed-Lock-File-Error

## Locking waiting for file lock on the registry index

```bash
rm -rf ~/.cargo/registry/index/*
# or
cargo clean
```

## Blocking waiting for file lock on package cache

```bash
rm -rf ~/.cargo/.package-cache
```

## links

- [Cargo build hangs with “ Blocking waiting for file lock on the registry index” after building parity from source](https://stackoverflow.com/questions/47565203/cargo-build-hangs-with-blocking-waiting-for-file-lock-on-the-registry-index-a?rq=1)
