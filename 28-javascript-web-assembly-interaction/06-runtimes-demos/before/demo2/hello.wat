(module 
    (type $fd_write_ty (func (param i32 i32 i32 i32) (result i32)))
    (import "wasi_snapshot_preview1" "fd_write" (func $fd_write (type $fd_write_ty)))
    (memory $mem 1)
    (export "memory" (memory $mem))
    (data (i32.const 9) "Hello WASI\n")
    (func (export "_start") 
          ;; Creating a new io vector within linear memory
        (i32.store (i32.const 0) (i32.const 8))  ;; pointer to the start of the 'Hello WASI\n' string
        (i32.store (i32.const 4) (i32.const 12))  ;;length of the 'Hello WASI\n' string

        (call $fd_write
            (i32.const 1) ;; file_descriptor - 1 for stdout
            (i32.const 0) ;; *iovs - The pointer to the iov array, which is stored at memory location 0
            (i32.const 1) ;; iovs_len - We're printing 1 string stored in an iov - so one.
            (i32.const 20) ;; nwritten - A place in memory to store the number of bytes written
        )
        drop ;; Discard the number of bytes written from the top of the stack
    )
) 