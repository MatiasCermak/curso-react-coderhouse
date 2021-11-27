//Por ahora buscaremos en nuestros json, así que más adelante tendremos que
import products from "../json/products.json";

const useFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
};

export default useFetch;
