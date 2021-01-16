import Head from "next/head";
const IndexPage = (await import("home/IndexPage")).default;
// const RenderPage = IndexPage.default;

const Home = props => <IndexPage {...props} />;

Home.getInitialProps = async ctx => {
  const props = await IndexPage.getInitialProps(ctx);
  return props;
};

export default Home;
