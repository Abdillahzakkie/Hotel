import React from "react";
import Navbar from "../components/Navbar/Navbar";
import mainImg from "../assets/hero.jpeg";

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const About = () => {
	return (
		<>{/* <Navbar background={mainImg} optionalText='return home' /> */}</>
	);
};

export default ErrorBoundary(About);
