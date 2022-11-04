import Layout from "../../components/layout";
import '../../dummy/products.json';

export const getStaticPaths = async () => {
  const res = await fetch('../../dummy/products.json');
  const data = await res.json();

  const paths = data.map(product => {
    return {
      params: { id: product.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('../../dummy/products.json' + id);
  const data = await res.json();

  return {
    props: { product: data }
  }
}

const Detail = ({ product }) => {
  return (
    <div className="my-2 mx-3">
    <Layout />
      <div>
        <h1>{ product.title }</h1>
        <p>{ product.price }</p>
        <p>{ product.description }</p>
        <p>{ product.category }</p>
        <p>{ product.rating.rate }</p>
        <p>{ product.rating.count }</p>
      </div>
    </div>
  );
}

export default Detail;