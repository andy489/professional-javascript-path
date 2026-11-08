(module 
 (import "js" "table" (table 2 funcref))
  (func $functionOne (result i32)
    i32.const 1
  )
  (func $functionTwo (result i32)
    i32.const 2
  )
 (elem (i32.const 0)  $functionOne $functionTwo)
)