(module 
    (import "codeModule" "readString" ( func $log(param i32 i32)))
    (import "memoryModule" "memory" (memory 1 100 shared ))
    (data (i32.const 0) "Hello From WebAssembly")
    (func (export "writeHW") 
        i32.const 0
        i32.const 22
        call $log
    )
)