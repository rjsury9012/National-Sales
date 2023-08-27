import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/Components/ProductList";

function Home() {
  return (
    <>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
    </>
  );
}

export default Home;
