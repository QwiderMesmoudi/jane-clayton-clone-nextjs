import { CATEGORY } from '@/Shared/category'
import axios from 'axios';
import Image from 'next/image'
import React from 'react'
import { IntlProvider, FormattedNumber } from 'react-intl';
import CurrencyInput from 'react-currency-input-field';
import FabricSection1 from '../component/fabric/FabricSection1';
import FabricSection2 from '../component/fabric/FabricSection2';
import FabricProducts from '../component/fabric/FabricProducts';
async function Fabric() {
    let products={}
        try {
            const response = await axios.post('http://magento2.com/graphql', {
                query:`
                    {
      products(filter: { category_id: {eq: "5" } }, pageSize: 2) {
        total_count
        items {
          id
          name
          
          sku
          price_range {
            minimum_price {
              regular_price {
                value
                currency
              }
            }
          }
          categories{
            name
          }
        
          media_gallery {
            url  # This will give you the image URL
          }
        }
      }
    }
                
                `
            
            });
    
            products = response.data.data.products;
            console.log(products?.items[0].price_range.minimum_price.regular_price.value)
    
            
    }
    catch (error) {
        console.error('Error fetching products:', error);
        
    
    
    }
    

  return (
    <div className='py-16'>
        <FabricSection1/>
        <FabricProducts products={products}/>
        <FabricSection2/>
    </div>
  )
}




export default Fabric