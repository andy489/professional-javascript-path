(module 

    (import "importModule" "importFunctionOne" ( func $log(param i32)))
    (import "importModule" "importFunctionTwo" ( func $log2(param i32)))
    (func (export "useImports") 
        i32.const 1
        call $log
        i32.const 2
        call $log2
    )
)