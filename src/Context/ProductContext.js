import React, { Component, createContext } from 'react';
import data from "../data";

const ProductContext = createContext();

class ProductProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            products: [],
            selectValue: 'all',
            category: [],
            sortedProducts: [],
            featuredProducts: [],
            loading: true
        }
    }
    
    componentDidMount() {
        const products = this.formatData(data);
        const category = this.getCategory(products);
        const featuredProducts = this.getFeatured(products);

        this.setState({
            products, 
            featuredProducts,
            sortedProducts: products, 
            selectValue: 'all',
            category,
            loading: false
        })
    }

    // Format data
    formatData = items => {
        const tempItem = items.map( item => {
            const id = item.sys.id;
            const images = item.fields.images.map(image => image.fields.file.url);
            return {id,...item.fields, images};
        })
        return tempItem
    }

    // Get slug
    getSlug = id => this.state.products.find(item => item.id === id);

    // Get unique category
    getCategory = products => {
        const category = products.reduce((prev, next) => {
            if(!prev.includes(next.type)) { prev.push(next.type) }
            return prev
        }, ['all']);

        return category
    }

    // Get featured projects
    getFeatured = products => products.filter(products => products.featured === true);

    // Handles select option change
    handleSelectChange = (e, {products} = this.state) => {
        // Get current value
        const currentValue = e.currentTarget.value;

        // update 
        if (currentValue === 'all') this.setState({selectValue: currentValue, sortedProducts: products});
         else {
            const tempItem = products.filter(item => item.type === currentValue);
            this.setState({selectValue: currentValue, sortedProducts: tempItem});
        }
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                getSlug: this.getSlug,
                handleSelectChange: this.handleSelectChange,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

export {ProductProvider, ProductContext}
