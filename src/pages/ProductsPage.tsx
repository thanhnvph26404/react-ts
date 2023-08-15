import React from 'react'
import {Link} from 'react-router-dom'
import { useGetProductsQuery, useRemoveProductMutation } from '../api/product'

const ProductsPage = () => {
    const { data: products } = useGetProductsQuery()
    const [removeProduct] = useRemoveProductMutation()
  return (
      <div className="overflow-x-auto">
          <button className='m-5 px-4 py-2 bg-red-400 text-blue-50 rounded-sm'><Link to={'add'}>Add</Link></button>
        <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div className="w-full lg:w-5/6">
                <div className="bg-white shadow-md rounded my-6">
                    <table className="min-w-max w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">name</th>
                                <th className="py-3 px-6 text-left">desc</th>
                                <th className="py-3 px-6 text-center">quantity</th>
                                <th className="py-3 px-6 text-center">origin</th>
                               
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                          <tbody className="text-gray-600 text-sm font-light">
                              {products?.map((product) => (
                                  <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                                  <td className="py-3 px-6 text-left whitespace-nowrap">
                                      <div className="flex items-center">
                                          
                                              <span className="font-medium">{product.name}</span>
                                      </div>
                                  </td>
                                  <td className="py-3 px-6 text-left">
                                      <div className="flex items-center">
                                          
                                              <span>{ product.desc}</span>
                                      </div>
                                  </td>
                                  <td className="py-3 px-6 text-center">
                                      <div className="flex items-center justify-center">
                                          {product.quantity}
                                      </div>
                                  </td>
                                  <td className="py-3 px-6 text-center">
                                      <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">{product.origin}</span>
                                  </td>
                                  <td className="py-3 px-6 text-center">
                                      <div className="flex item-center justify-center">
                                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" >
                                            <Link to={`edit/${product.id}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={() => removeProduct(product.id!)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                      </div>
                                  </td>
                              </tr>
                              ))}
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsPage