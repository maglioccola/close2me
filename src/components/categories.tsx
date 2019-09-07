import * as React from 'react';
import axios from 'axios';
import Category from './category'

import '../style.scss'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type CategoryType = {
  id: string;
  title: string;
  iconName: string;
  color: string;
}

type State = {
  message: string;
  categories: [];
}

export default class Categories extends React.Component<void, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      message: "",
      categories: []
    }
  }

  getCategories = () => {
    axios
      .get('http://192.168.44.9:8080/categories/')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({ message: "", categories: res.data });
        } else {
          this.setState({ message: "TWS", categories: [] });
        }
      }).catch(error => {
        this.setState({ categories: [], message: error.message });
      });
  }

  componentDidMount() {
    this.getCategories();
  }

  render() {
    if (this.state.categories.length == 0) {
      return (
        <div>{this.state.message}</div>
      );
    }
    else {
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };
      return (
        <Carousel responsive={responsive}>
          {
            this.state.categories.map((category: CategoryType, i) => {
              return <Category id={category.id} title={category.title} iconName={category.iconName} color={category.color} />
            })
          }

        </Carousel>
      );
    }
  }

}

