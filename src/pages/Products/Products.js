import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import { PulseLoader } from "react-spinners";
import "./Products.css";
import GeneralInfo from "../../components/information/GeneralInfo";
import { fetchPopularProducts } from "../../store/products/products.actions";

function Products() {
  const dispatch = useDispatch();
  const { products, isProductsFetching, errorProducts } = useSelector(
    (state) => state.products
  );

  const productsList = products?.map((product) => (
    <Product product={product} />
  ));

  return (
    <main id="products">
      {products && (
        <>
          <h1>Popular Products</h1>
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
          handleAction={() => dispatch(fetchPopularProducts())}
        />
      )}
    </main>
  );
}

export default Products;
