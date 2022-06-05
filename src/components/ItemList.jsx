import React from 'react'
import Item from './Item'




const ItemList = ({listaProd}) => {
  return (
 <div className='cards'>
        {listaProd?.map(listaProd=><Item key={listaProd.id} listaProd={listaProd}/>)}

    </div>
  )
}

export default ItemList