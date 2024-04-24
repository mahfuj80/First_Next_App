import React from "react";

const ProductDetails = ({ params, searchParams }) => {
  // console.log(params, searchParams);
  return (
    <div>
      <h1>This is Dynamic Product Details {params.id} </h1>
      <h1>Search By : {searchParams?.category} </h1>
    </div>
  );
};

export default ProductDetails;
