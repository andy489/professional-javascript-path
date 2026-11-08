use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen]
    fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn test_string(msg: &str) {
    alert(msg);
}

#[wasm_bindgen]
pub fn divide(numerator: usize, denominator: usize) -> usize{
    let result = numerator/denominator;
    let log_msg = &format!("{}/{} = {}", numerator, denominator, result);
    alert(log_msg);
    log(log_msg);
    return result;
}