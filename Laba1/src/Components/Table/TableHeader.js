import react from 'react'

export const TableHeader = () => {
 return(
     <thead>
     <tr>
         <th className="tableHeader">stock_name</th>
         <th className="tableHeader">company_name</th>
         <th className="tableHeader">price</th>
         <th className="tableHeader">currency</th>
         <th className="tableHeader">change</th>
     </tr>
     </thead>
 )
}