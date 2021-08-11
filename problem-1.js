var products = [
    {
        productName: 'Loptop',
        productId: 01,
        productStock: 199
    },
    {
        productName: 'teblet',
        productId: 01,
        productStock: 199
    },
    {
        productName: 'wacth',
        productId: 01,
        productStock: 199
    },
    {
        productName: 'Loptop',
        productId: 01,
        productStock: 199
    },
    {
        productName: 'phone',
        productId: 01,
        productStock: 199
    }
]

function getRestProduct(itemName){
    let restProducts =[];
    for(let product of products){
        // console.log(product);
        if(product['productName'] == itemName){
            continue;
        }
        restProducts.push(product);
    }
    return restProducts;
}

console.log(getRestProduct('phone'));