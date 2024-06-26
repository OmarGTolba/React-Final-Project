import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { Button } from "bootstrap";
import ProductsContext from "../../contexts/ProductsContext";
import CategoryContext from "../../contexts/CategoriesContext";
import axios from "axios";
import AuctionContext from "../../contexts/AuctionContext";
import {
  Box,
  Container,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormLabel,
  Radio,
  Pagination,
} from "@mui/material";

export default function AllProducts() {
  const { products } = useContext(ProductsContext);
  const { categories } = useContext(CategoryContext);
  const {auction}=useContext(AuctionContext)
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [searchLocation, setSearchLocation] = useState([]);
  const [searchCategory, setSearchCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3; // Number of products to display per page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  console.log(products);
  const currentProducts = displayedProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
console.log(auction);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    setDisplayedProducts(products?.products);
  }, [products]);

  useEffect(() => {}, [displayedProducts]);

  function filterByCategory(event) {
    setSearchCategory(event.target.value);
    setCurrentPage(1);

    if (event.target.value == "All") {
      if (searchLocation == "" || searchLocation == "All") {
        setDisplayedProducts(products?.products);
        return;
      } else {
        const dp = products.products.filter(
          (product) => product?.location === searchLocation
        );
        console.log(dp);
        console.log(event.target.value);
        setDisplayedProducts(dp);
        return;
      }
    } else if (searchLocation == "" || searchLocation == "All") {
      const dp = products.products.filter(
        (product) => product?.categoryId?.title === event.target.value
      );
      setDisplayedProducts(dp);
      return;
    } else {
      const dp = products.products.filter(
        (product) =>
          product?.categoryId?.title === event.target.value &&
          product?.location === searchLocation
      );
      setDisplayedProducts(dp);
    }
    setCurrentPage(1);
  }

  function filterByLocation(event) {
    setSearchLocation(event.target.value);
    if (event.target.value == "All") {
      setDisplayedProducts(products?.products);
    } else if (
      !searchCategory ||
      searchCategory == "All" ||
      searchCategory == ""
    ) {
      const dp = products.products.filter(
        (product) => product?.location === event.target.value
      );
      setDisplayedProducts(dp);
    } else {
      const dp = products.products.filter(
        (product) =>
          product?.location === event.target.value &&
          product?.categoryId?.title === searchCategory
      );
      console.log(dp);
      setDisplayedProducts(dp);
      console.log(event.target.value);
    }
    setCurrentPage(1);
  }

  async function addToCart(productId) {
    console.log(productId);
    const productForm = new FormData();
    console.log(localStorage.getItem("token"));
    productForm.append("productId", productId);
    try {
      const token = localStorage.getItem("token");
      const resp = await axios.post(
        "http://localhost:3000/api/v1/auth/add-to-cart",
        productForm,
        {
          headers: {
            "Content-Type": "application/json",
            jwt: token,
          },
        }
      );
      console.log(resp);
    } catch (err) {
    }
  }

  return (
    <>
      <Container
        sx={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "25%",
            height: "82vh",
            border: "3px solid #76a85f",
            borderRadius: "10px",
            padding: "10px",
            color: "#76a85f",
          }}
        >
          <Box sx={{ width: "75%", margin: "auto", marginTop: 2 }}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Categories
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="All"
                name="radio-buttons-group"
                onChange={filterByCategory}
              >
                <FormControlLabel value="All" control={<Radio />} label="All" />
                {categories?.categories?.map((category) => (
                  <FormControlLabel
                    value={category?.title}
                    control={<Radio />}
                    label={category?.title}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ width: "75%", margin: "auto", marginTop: 2 }}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">City</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={filterByLocation}
              >
                <FormControlLabel value="All" control={<Radio />} label="All" />
                <FormControlLabel
                  value="portsaid"
                  control={<Radio />}
                  label="portsaid"
                />
                <FormControlLabel
                  value="Ismailia"
                  control={<Radio />}
                  label="Ismailia"
                />
                <FormControlLabel
                  value="Alex"
                  control={<Radio />}
                  label="Alex"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <button>Search</button>
          <button>Search</button>
        </Box>
        <Box
          sx={{ width: "70%", display: "flex", justifyContent: "" }}
          flexWrap={"wrap"}
        >
          {/* <ProductCard></ProductCard> */}
          {/* <ProductCard title='sdas' price='10'></ProductCard> */}
          {auction?.map((product) => (
            <ProductCard
            addToCart={() => {
                addToCart(product._id);
              }}
              product={product}
            ></ProductCard>
          ))}
        </Box>
      </Container>
      <Container
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Pagination
          count={Math.ceil(displayedProducts?.length / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Container>
    </>
  );
}