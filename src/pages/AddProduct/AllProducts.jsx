import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { Box, Container, FormControlLabel, RadioGroup , FormControl , FormLabel , Radio, Pagination } from '@mui/material'
import { Button } from 'bootstrap'
import ProductsContext from '../../contexts/ProductsContext'
import CategoryContext from '../../contexts/CategoriesContext'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export default function AllProducts() {
    const {products} = useContext(ProductsContext)
    const {categories} = useContext(CategoryContext)
    const [displayedProducts,setDisplayedProducts]= useState([])
    const [searchLocation,setSearchLocation]= useState([])
    const [searchCategory,setSearchCategory]= useState([])
    const [currentPage, setCurrentPage] = useState(1);
    
    const productsPerPage = 3 // Number of products to display per page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    
    const currentProducts = displayedProducts?.slice(indexOfFirstProduct, indexOfLastProduct);
  
    // Handle page change
    const handlePageChange = (event, value) => {
      setCurrentPage(value);
    };


    useEffect(() => {
    setDisplayedProducts(products?.products)
  },[products]);
  
  
    useEffect(() => {
      
    },[displayedProducts] );
    
    
    function filterByCategory(event){
      
      setSearchCategory(event.target.value)
      setCurrentPage(1);
      
      if(event.target.value == "All"  ){
        if(searchLocation == '' ||searchLocation == 'All'){

          setDisplayedProducts(products?.products)
          return
        }
        else {
          const dp = products.products.filter(product => product?.location === searchLocation );
          console.log(dp);
          console.log(event.target.value);
          setDisplayedProducts(dp)
              return
          
        }
      }
      else if(searchLocation == '' ||searchLocation == 'All'){
        
        const dp = products.products.filter(product => product?.categoryId?.title === event.target.value);
        console.log(dp);
        console.log(event.target.value);
        setDisplayedProducts(dp)
            return
      }else{
        const dp = products.products.filter(product => product?.categoryId?.title === event.target.value &&product?.location === searchLocation );
        console.log(dp);
        console.log(event.target.value);
        setDisplayedProducts(dp)
      
      }
      setCurrentPage(1);
  }
  


  function filterByLocation(event){
    setSearchLocation(event.target.value)
    if(event.target.value == "All" ){
      setDisplayedProducts(products?.products)
    }
    
else if(!searchCategory || searchCategory == "All" || searchCategory == ''){
  const dp = products.products.filter(product => product?.location === event.target.value );
  setDisplayedProducts(dp)
  
}
else{
const dp = products.products.filter(product => product?.location === event.target.value &&  product?.categoryId?.title === searchCategory);
console.log(dp);
setDisplayedProducts(dp)
  console.log(event.target.value);}
  setCurrentPage(1);
}


    return (

    <>
    <Container sx={{display:'flex' , marginTop:'20px' , justifyContent:'space-between'}} >

        <Box sx={{width:'25%' , height:'82vh', border:'4px solid #5daa60' , borderRadius:'10px'}} >
<Box sx={{width:'75%', margin:'auto' , marginTop:2}}>
<FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Categories</FormLabel>
  <RadioGroup
  aria-labelledby="demo-radio-buttons-group-label"
  defaultValue="All"
  name="radio-buttons-group"
  onChange={filterByCategory}
>
  <FormControlLabel
    value="All"
    control={<Radio sx={{ '&.Mui-checked': { color: 'green' } }} />} // Apply green color when checked and change icon size
    label="All"
  />
  {categories?.categories?.map((category) => (
    <FormControlLabel
      key={category.title} // Make sure to add a unique key for each FormControlLabel
      value={category.title}
      control={<Radio sx={{ '&.Mui-checked': { color: 'green' } }} />} // Apply green color when checked
      label={category.title}
    />
  ))}
</RadioGroup>

</FormControl>
</Box>
<Box sx={{width:'75%', margin:'auto' , marginTop:2}}>
<FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Location</FormLabel>
  <RadioGroup
  
  aria-labelledby="demo-radio-buttons-group-label"
  defaultValue="All"
  name="radio-buttons-group"
  onChange={filterByLocation}
>
  <FormControlLabel
    value="All"
    control={<Radio sx={{ '&.Mui-checked': { color: 'green' } }} />} // Apply green color when checked
    label="All"
  />
  <FormControlLabel
    value="portsaid"
    control={<Radio sx={{ '&.Mui-checked': { color: 'green' } }} />} // Apply green color when checked
    label="portsaid"
  />
  <FormControlLabel
    value="Ismailia"
    control={<Radio sx={{ '&.Mui-checked': { color: 'green' } }} />} // Apply green color when checked
    label="Ismailia"
  />
  <FormControlLabel
    value="Alex"
    control={<Radio sx={{ '&.Mui-checked': { color: 'green' } }} />} // Apply green color when checked
    label="Alex"
  />
</RadioGroup>

</FormControl>
</Box>



        </Box>


        <Box sx={{width:'70%' , display:'flex' , justifyContent:'' }} flexWrap={'wrap'}>
{/* <ProductCard></ProductCard> */}
{/* <ProductCard title='sdas' price='10'></ProductCard> */}
{currentProducts?.map((product)=>(
<ProductCard key={product.title} title={product?.title} price={product?.price}  category={product?.categoryId?.title}  location={product?.location}></ProductCard>

))}
        </Box>
    </Container>
    



    <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination

          count={Math.ceil(displayedProducts?.length / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Container>
    </>
  )
}
