import {ref} from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';


export default function useProducts(){
   const products = ref([])
   const product = ref([])
   const errors = ref('')
   const router = useRouter()

   
   const getProducts = async() => {
       let response =  axios.get(`api/products`);
       products.value = (await response).data.data;
   }

   const getProduct = async(id) => {
       let response =  axios.get(`../../api/products/${id}`);
       product.value = (await response).data.data;
   }
   
   const destroyProducts = async(id) => {
      await axios.delete(`api/products/${id}`);
   }
   
   const storeProduct = async(data) => {
      errors.value = '';
      try{
         await axios.post('../api/products', data);
         await router.push({name:"products.index"})
      }catch(e){
         if(e.response.status === 422){
         errors.value = e.response.data.errors
         }
      }
   }

    const updateProduct = async(id) => {
      errors.value = '';
      try{
         await axios.put(`../../api/products/${id}`, product.value);
         await router.push({name:"products.index"})
      }catch(e){
         if(e.response.status === 422){
         errors.value = e.response.data.errors
         }
      }
   }

    return{
        products,
        product,
        errors,
        getProducts,
        getProduct,
        destroyProducts,
        storeProduct,
        updateProduct
    }
}