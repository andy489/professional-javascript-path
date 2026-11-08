using System;
using Wasmtime;

namespace WASMTIMEDEMO
{
    class Program
    {
        static void Main(string[] args)
        {
            using var engine = new Engine();
            using var module = Module.FromFile(engine, "divide.wasm");
            using var linker = new Linker(engine);
            using var store = new Store(engine);
            var instance = linker.Instantiate(store, module);
            var divide = instance.GetFunction<int, int, int>("divide");
            if (divide is not null) {
                Console.WriteLine($"divide(42, 2)) = {divide(42, 2)}");
            }            
        }
    }
}