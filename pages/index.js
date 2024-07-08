import Article from './posts/article';
import Footer from './components/footer';

export default function Index() {
  console.log("Index rendering")
  return (
    <>
      <Article />
      <Footer />
    </>
  );
}
