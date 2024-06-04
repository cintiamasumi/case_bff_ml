import ExceptionHandler from "../../exception";
import { ErrorConection } from "./enum/api-error";
const axios = require('axios');

export class CustomerMercadoLivreProvider {
  

  async search(search: { q:string }, limit: number) {
    const options = {
        method: 'GET',
        url: process.env.PROVIDER_URL_ML+'sites/MLA/search',
        params: { q: search.q , limit},
    };
    try {
      const response = await axios
        .request(options)
        .then( (response: any) => {
          
          return response.data;
        })
        .catch(function (error: any) {
            console.error(error);
        });
      return response
    } catch (error) {
      throw new ExceptionHandler(ErrorConection.API, 500)
    }
  }

   async itemsId(id:string) {
    const options = {
        method: 'GET',
        url: process.env.PROVIDER_URL_ML+`items/${id}`,
      };

    try {
      const response = await axios
        .request(options)
        .then(function (response: any) {
            return response.data
        })
        .catch(function (error: any) {
          throw new ExceptionHandler(ErrorConection.API_DATA, 500)
      });
      return response
    } catch (error) {
      throw new ExceptionHandler(ErrorConection.API, 500)
    }
  }

  async itemById(id:string){
    const options = {
      method: 'GET',
      url: process.env.PROVIDER_URL_ML+`items/${id}`,
    }

    try {
      const response = await axios
        .request(options)
        .then(function (response: any) {
            return response.data
        })
        .catch(function (error: any) {
          throw new ExceptionHandler(ErrorConection.API_DATA, 500)
        });
      return response
    } catch (error) {

      throw new ExceptionHandler(ErrorConection.API, 500)
    }
  }
  
  async itemDescription(id:string){
    const options = {
      method: 'GET',
      url: process.env.PROVIDER_URL_ML+`items/${id}/description`,
    }

    try {
      const response = await axios
        .request(options)
        .then(function (response: any) {
            return response.data
        })
        .catch(function (error: any) {
          throw new ExceptionHandler(ErrorConection.API_DATA, 500)
        });
      return response
    } catch (error) {

      throw new ExceptionHandler(ErrorConection.API, 500)
    }
   }
  async categoriesItem(id:string){
    const options = {
      method: 'GET',
      url: process.env.PROVIDER_URL_ML+`categories/${id}`,
    };

    try {
      const response = await axios
        .request(options)
        .then(function (response: any) {
          return response.data
        })
        .catch(function (error: any) {
          throw new ExceptionHandler(ErrorConection.API_DATA, 500)
        });
      return response
    } catch (error) {
      throw new ExceptionHandler(ErrorConection.API, 500)
    }
  }

  async currenciesItem(id:string | undefined){
    const options = {
      method: 'GET',
      url: process.env.PROVIDER_URL_ML+`currencies/${id}`,
    };

    try {
      const response = await axios
        .request(options)
        .then(function (response: any) {
          return response.data
        })
        .catch(function (error: any) {
          throw new ExceptionHandler(ErrorConection.API_DATA, 500)
        });
      return response
    } catch (error) {
      throw new ExceptionHandler(ErrorConection.API, 500)
    }
  }

}
      
