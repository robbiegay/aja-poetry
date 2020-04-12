import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Layout from "./Layout";

import BlackPorcelain from "./poems/BlackPorcelain";
import Morning from "./poems/Morning";
import GoodIsNotAlwaysRight from "./poems/GoodIsNotAlwaysRight";

class Poem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPost: "",
        }
    }

    getPoem() {
        let idx = window.location.pathname.lastIndexOf("/")
        let poemName = window.location.pathname.slice(idx + 1);
        switch (poemName) {
            case "black-porcelain":
                this.setState({
                    poem: <BlackPorcelain />
                });
                break;
            case "morning":
                this.setState({
                    poem: <Morning />
                });
                break;
            case "good-is-not-always-right":
                this.setState({
                    poem: <GoodIsNotAlwaysRight />
                });
                break;
            default:
                console.log("Error: default case triggered.");
        }
    }
    componentDidMount() {
        this.getPoem();
    }

    render() {
        return (
            <>
                <NavBar />
                <Layout>
                    {this.state.poem}
                </Layout>
                <Footer />
            </>
        );
    }
}

export default Poem;
