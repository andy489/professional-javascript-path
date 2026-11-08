(module 
 (import "js" "table" (table 3 funcref))
 (func $functionThree (result i32)
    i32.const 3
  )
 (elem (i32.const 2)  $functionThree)
)