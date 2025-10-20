import { Link } from "react-router-dom";

import FooterTitle from "./FooterTitle";

import { testPosts } from "@/constants/testPosts";
import { testProducts } from "@/constants/testProducts";
import { testCategories } from "@/constants/testCategories";

export function FooterMain() {
  return (
    <div className="bg-foreground/90 text-background py-10">
      <div className="container grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <FooterTitle>How we got started</FooterTitle>

          <p>
            Frustrated by overpriced, low quality products, we launched Doppell
            in 2020. Our goal is to deliver premium goods without the premium
            markup. Quality first, always.
          </p>
        </div>

        <div>
          <FooterTitle>Our blog</FooterTitle>

          <ul className="flex flex-col">
            {testPosts.map((post) => (
              <li
                key={post.slug}
                className="flex gap-4 py-2.5 border-b border-b-white/10 last:border-b-0"
              >
                <Link to={`/blog/${post.slug}`} className="shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="size-12 object-cover shrink-0"
                  />
                </Link>

                <Link
                  to={`/blog/${post.slug}`}
                  className="line-clamp-2 underline-offset-2 hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterTitle>Products</FooterTitle>

          <ul className="flex flex-col">
            {testProducts.map((product) => (
              <li
                key={product.name + "footer"}
                className="flex gap-4 py-3 border-b border-b-white/10 last:border-b-0"
              >
                <Link to={`/products/${product.slug}`} className="shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-15 object-cover shrink-0"
                  />
                </Link>

                <div className="flex flex-col">
                  <Link
                    to={`/products/${product.slug}`}
                    className="line-clamp-2 mb-2 underline-offset-2 hover:underline"
                  >
                    {product.name}
                  </Link>

                  <p className="font-bold">${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterTitle>Categories</FooterTitle>

          <ul className="flex flex-col">
            {testCategories.map((category) => (
              <li className="border-b border-b-white/10 last:border-b-0">
                <Link
                  to={`/product/categories/${category.slug}`}
                  className="block py-2 underline-offset-2 hover:underline"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
