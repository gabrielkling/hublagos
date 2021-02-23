import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import News from "../components/News";
import Footer from "../components/Footer";



const NewsPage = () => (

    <Layout pageTitle="Hub Lagos | Blog">
        <NavOne />
        <PageHeader title="Blog" />
        <News />
        <Footer />
    </Layout>

)

export default NewsPage;