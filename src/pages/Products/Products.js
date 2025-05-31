import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import { PulseLoader } from "react-spinners";
import "./Products.css";
import GeneralInfo from "../../components/information/GeneralInfo";
import {
  fetchPopularProducts,
  fetchProductsByCategoryId,
} from "../../store/products/products.actions";
import { useLocation } from "react-router";
import { useEffect } from "react";

function Products() {
  const dispatch = useDispatch();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const category_id = queryParams.get("category_id");

  let heading = "Popular Products";
  const { categories } = useSelector((state) => state.categories);
  if (category_id) {
    heading = categories?.find(
      (category) => category.id === parseInt(category_id)
    ).name;
  }

  const handleFetch = () => {
    if (category_id) {
      dispatch(fetchProductsByCategoryId(category_id));
    } else {
      dispatch(fetchPopularProducts());
    }
  };

  useEffect(() => {
    if (category_id) {
      dispatch(fetchProductsByCategoryId(category_id));
    } else {
      dispatch(fetchPopularProducts());
    }
  }, [category_id, dispatch]);

  const { products, isProductsFetching, errorProducts } = useSelector(
    (state) => state.products
  );

  const productsList = products?.map((product) => (
    <Product key={product?.id} product={product} />
  ));

  return (
    <main id="products">
      {products && (
        <>
          <h1>{heading}</h1>
          {isProductsFetching ? (
            <PulseLoader className="loader" color="#F34325" />
          ) : (
            <div className="products-list">{productsList}</div>
          )}
        </>
      )}
      {errorProducts && (
        <GeneralInfo
          isError={true}
          messages={errorProducts}
          btnText="Refresh"
          handleAction={handleFetch}
        />
      )}
    </main>
  );
}

export default Products;
