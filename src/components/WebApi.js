const Api = {

// user auth api 
    sendOTPApi: "http://localhost:8000/api/user/sendOTP",
    registrationApi: "http://localhost:8000/api/user/register",
    LoginApi: "http://localhost:8000/api/user/signIn",
// Get Catgeory Api
    GetCategoryList:"http://localhost:8000/api/category/CategoryList",
    GetCategoryByID:"http://localhost:8000/api/category/fetchCategoryById/id",
    GetCategoryByName:"http://localhost:8000/api/category/fetchCategoryByName/name",
// Add Category 
    AddCategoryName:"http://localhost:8000/api/category/addCategory",
// Get Product api 
    GetAllProduct:"http://localhost:8000/api/product/productList",
    GetProductByID:"http://localhost:8000/api/product/fetchProductById/id",
    GetProductByName:"http://localhost:8000/api/product/fetchProductByName/name",
// Update Product By Id
    UpdateProductByID:"http://localhost:8000/api/product/updateProduct",
// Delete Product 
    DeleteProductByName:"http://localhost:8000/api/product/removeProductByName/name",
// add category scrap
    AddScrapCategory:'http://localhost:8000/api/scrapCategory/add-category',
    // get scrap by user Id

    GetProductByUserID:'http://localhost:3000/api/scrapProduct/getProduct-byuserid/:userId'
}

export default Api;