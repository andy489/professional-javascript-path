(module
  (type (;0;) (func))
  (type (;1;) (func (param i32)))
  (type (;2;) (func (param i32 i32 i32)))
  (import "env" "memory" (memory (;0;) 1 100 shared))
  (func $__wasm_call_ctors (type 0))
  (func $__wasm_init_tls (type 1) (param i32))
  (func $quicksort (type 2) (param i32 i32 i32)
    (local i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32)
    global.get $__stack_pointer
    local.set 3
    i32.const 32
    local.set 4
    local.get 3
    local.get 4
    i32.sub
    local.set 5
    local.get 5
    global.set $__stack_pointer
    local.get 5
    local.get 0
    i32.store offset=28
    local.get 5
    local.get 1
    i32.store offset=24
    local.get 5
    local.get 2
    i32.store offset=20
    local.get 5
    i32.load offset=24
    local.set 6
    local.get 5
    local.get 6
    i32.store offset=16
    local.get 5
    i32.load offset=20
    local.set 7
    local.get 5
    local.get 7
    i32.store offset=12
    local.get 5
    i32.load offset=28
    local.set 8
    local.get 5
    i32.load offset=24
    local.set 9
    local.get 5
    i32.load offset=20
    local.set 10
    local.get 9
    local.get 10
    i32.add
    local.set 11
    i32.const 2
    local.set 12
    local.get 11
    local.get 12
    i32.div_s
    local.set 13
    i32.const 2
    local.set 14
    local.get 13
    local.get 14
    i32.shl
    local.set 15
    local.get 8
    local.get 15
    i32.add
    local.set 16
    local.get 16
    i32.load
    local.set 17
    local.get 5
    local.get 17
    i32.store offset=4
    block  ;; label = @1
      loop  ;; label = @2
        local.get 5
        i32.load offset=16
        local.set 18
        local.get 5
        i32.load offset=12
        local.set 19
        local.get 18
        local.set 20
        local.get 19
        local.set 21
        local.get 20
        local.get 21
        i32.le_s
        local.set 22
        i32.const 1
        local.set 23
        local.get 22
        local.get 23
        i32.and
        local.set 24
        local.get 24
        i32.eqz
        br_if 1 (;@1;)
        block  ;; label = @3
          loop  ;; label = @4
            local.get 5
            i32.load offset=28
            local.set 25
            local.get 5
            i32.load offset=16
            local.set 26
            i32.const 2
            local.set 27
            local.get 26
            local.get 27
            i32.shl
            local.set 28
            local.get 25
            local.get 28
            i32.add
            local.set 29
            local.get 29
            i32.load
            local.set 30
            local.get 5
            i32.load offset=4
            local.set 31
            local.get 30
            local.set 32
            local.get 31
            local.set 33
            local.get 32
            local.get 33
            i32.lt_s
            local.set 34
            i32.const 1
            local.set 35
            local.get 34
            local.get 35
            i32.and
            local.set 36
            local.get 36
            i32.eqz
            br_if 1 (;@3;)
            local.get 5
            i32.load offset=16
            local.set 37
            i32.const 1
            local.set 38
            local.get 37
            local.get 38
            i32.add
            local.set 39
            local.get 5
            local.get 39
            i32.store offset=16
            br 0 (;@4;)
          end
        end
        block  ;; label = @3
          loop  ;; label = @4
            local.get 5
            i32.load offset=28
            local.set 40
            local.get 5
            i32.load offset=12
            local.set 41
            i32.const 2
            local.set 42
            local.get 41
            local.get 42
            i32.shl
            local.set 43
            local.get 40
            local.get 43
            i32.add
            local.set 44
            local.get 44
            i32.load
            local.set 45
            local.get 5
            i32.load offset=4
            local.set 46
            local.get 45
            local.set 47
            local.get 46
            local.set 48
            local.get 47
            local.get 48
            i32.gt_s
            local.set 49
            i32.const 1
            local.set 50
            local.get 49
            local.get 50
            i32.and
            local.set 51
            local.get 51
            i32.eqz
            br_if 1 (;@3;)
            local.get 5
            i32.load offset=12
            local.set 52
            i32.const -1
            local.set 53
            local.get 52
            local.get 53
            i32.add
            local.set 54
            local.get 5
            local.get 54
            i32.store offset=12
            br 0 (;@4;)
          end
        end
        local.get 5
        i32.load offset=16
        local.set 55
        local.get 5
        i32.load offset=12
        local.set 56
        local.get 55
        local.set 57
        local.get 56
        local.set 58
        local.get 57
        local.get 58
        i32.le_s
        local.set 59
        i32.const 1
        local.set 60
        local.get 59
        local.get 60
        i32.and
        local.set 61
        block  ;; label = @3
          local.get 61
          i32.eqz
          br_if 0 (;@3;)
          local.get 5
          i32.load offset=28
          local.set 62
          local.get 5
          i32.load offset=16
          local.set 63
          i32.const 2
          local.set 64
          local.get 63
          local.get 64
          i32.shl
          local.set 65
          local.get 62
          local.get 65
          i32.add
          local.set 66
          local.get 66
          i32.load
          local.set 67
          local.get 5
          local.get 67
          i32.store offset=8
          local.get 5
          i32.load offset=28
          local.set 68
          local.get 5
          i32.load offset=12
          local.set 69
          i32.const 2
          local.set 70
          local.get 69
          local.get 70
          i32.shl
          local.set 71
          local.get 68
          local.get 71
          i32.add
          local.set 72
          local.get 72
          i32.load
          local.set 73
          local.get 5
          i32.load offset=28
          local.set 74
          local.get 5
          i32.load offset=16
          local.set 75
          i32.const 2
          local.set 76
          local.get 75
          local.get 76
          i32.shl
          local.set 77
          local.get 74
          local.get 77
          i32.add
          local.set 78
          local.get 78
          local.get 73
          i32.store
          local.get 5
          i32.load offset=8
          local.set 79
          local.get 5
          i32.load offset=28
          local.set 80
          local.get 5
          i32.load offset=12
          local.set 81
          i32.const 2
          local.set 82
          local.get 81
          local.get 82
          i32.shl
          local.set 83
          local.get 80
          local.get 83
          i32.add
          local.set 84
          local.get 84
          local.get 79
          i32.store
          local.get 5
          i32.load offset=16
          local.set 85
          i32.const 1
          local.set 86
          local.get 85
          local.get 86
          i32.add
          local.set 87
          local.get 5
          local.get 87
          i32.store offset=16
          local.get 5
          i32.load offset=12
          local.set 88
          i32.const -1
          local.set 89
          local.get 88
          local.get 89
          i32.add
          local.set 90
          local.get 5
          local.get 90
          i32.store offset=12
        end
        br 0 (;@2;)
      end
    end
    local.get 5
    i32.load offset=24
    local.set 91
    local.get 5
    i32.load offset=12
    local.set 92
    local.get 91
    local.set 93
    local.get 92
    local.set 94
    local.get 93
    local.get 94
    i32.lt_s
    local.set 95
    i32.const 1
    local.set 96
    local.get 95
    local.get 96
    i32.and
    local.set 97
    block  ;; label = @1
      local.get 97
      i32.eqz
      br_if 0 (;@1;)
      local.get 5
      i32.load offset=28
      local.set 98
      local.get 5
      i32.load offset=24
      local.set 99
      local.get 5
      i32.load offset=12
      local.set 100
      local.get 98
      local.get 99
      local.get 100
      call $quicksort
    end
    local.get 5
    i32.load offset=16
    local.set 101
    local.get 5
    i32.load offset=20
    local.set 102
    local.get 101
    local.set 103
    local.get 102
    local.set 104
    local.get 103
    local.get 104
    i32.lt_s
    local.set 105
    i32.const 1
    local.set 106
    local.get 105
    local.get 106
    i32.and
    local.set 107
    block  ;; label = @1
      local.get 107
      i32.eqz
      br_if 0 (;@1;)
      local.get 5
      i32.load offset=28
      local.set 108
      local.get 5
      i32.load offset=16
      local.set 109
      local.get 5
      i32.load offset=20
      local.set 110
      local.get 108
      local.get 109
      local.get 110
      call $quicksort
    end
    i32.const 32
    local.set 111
    local.get 5
    local.get 111
    i32.add
    local.set 112
    local.get 112
    global.set $__stack_pointer
    return)
  (table (;0;) 1 1 funcref)
  (global $__stack_pointer (mut i32) (i32.const 65536))
  (global $__tls_base (mut i32) (i32.const 0))
  (global $__tls_size i32 (i32.const 0))
  (global $__tls_align i32 (i32.const 0))
  (global (;4;) i32 (i32.const 65536))
  (global (;5;) i32 (i32.const 65536))
  (global (;6;) i32 (i32.const 65536))
  (global (;7;) i32 (i32.const 65536))
  (global (;8;) i32 (i32.const 0))
  (global (;9;) i32 (i32.const 1))
  (export "__wasm_call_ctors" (func $__wasm_call_ctors))
  (export "__tls_size" (global $__tls_size))
  (export "__tls_align" (global $__tls_align))
  (export "__wasm_init_tls" (func $__wasm_init_tls))
  (export "quicksort" (func $quicksort))
  (export "__indirect_function_table" (table 0))
  (export "__dso_handle" (global 4))
  (export "__data_end" (global 5))
  (export "__global_base" (global 6))
  (export "__heap_base" (global 7))
  (export "__memory_base" (global 8))
  (export "__table_base" (global 9)))
