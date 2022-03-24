
import "./product-page.css";
export default function ProductPage(){

  return(
      <section className="product-layout-container">
        <div className="product-layout-main">
            <section className="grid-two-layout-container">
              <section className="grid-two-layout-left">
              <div className="container fl-end">
                <article className="card card-shadow w-s">
                  <div className="background">
                    <img className="product-img-s" src="/media/products/women/dress/1.webp" alt=""></img>
                  </div>
                  <div className="card-content ">
                  <i className="fas fa-heart primary-col white-trans-bg round f-m wishlist-btn"></i>
                    <i className="sale-tag sale-tag-bg end">
                      SALE
                      <i className="fa-solid fa-tag"></i>
                    </i>
                  </div>
                  <div className="card-content-foot inline">
                      <a href="#" className="btn primary mg-b-s mg-l-s center">
                        <i className="fas fa-shopping-cart mg-r-s"></i>Add to cart
                      </a>
                      <div className="card-content stacked end">
                        <p className="original-price">1599 Rs</p>
                        <p className="sale-price">780 Rs</p>
                      </div>
                  </div>
                  </article>

                  <article className="card card-shadow w-s">
                    <div className="background">
                      <img className="product-img-s" src="/media/products/women/dress/2.webp" alt=""></img>
                    </div>
                    <div className="card-content ">
                    <i className="fas fa-heart primary-col white-trans-bg round f-m wishlist-btn"></i>

                    </div>
                    <div className="card-content-foot inline">
                        <a href="#" className="btn primary mg-b-s mg-l-s center">
                          <i className="fas fa-shopping-cart mg-r-s"></i>Add to cart
                        </a>
                        <div className="card-content stacked end">
                          <p className="fas fa-tag end"></p>
                          <p className="f-m">1299 Rs</p>
                        </div>

                    </div>
                    </article>

                </div>
              </section>
              <section className="grid-two-layout-right">
               <div className="container">
                <article className="card card-shadow w-s">
                  <div className="background">
                    <img className="product-img-s" src="/media/products/women/top/1.webp" alt=""></img>
                  </div>
                  <div className="card-content ">
                  <i className="fas fa-heart primary-col white-trans-bg round f-m wishlist-btn"></i>

                  </div>
                  <div className="card-content-foot inline">
                      <a href="#" className="btn primary mg-b-s mg-l-s center">
                        <i className="fas fa-shopping-cart mg-r-s"></i>Add to cart
                      </a>
                      <div className="card-content stacked end">
                        <p className="fas fa-tag end"></p>
                        <p className="f-m">1299 Rs</p>
                      </div>

                  </div>
                  </article>

                  <article className="card card-shadow w-s">
                    <div className="background">
                      <img className="product-img-s" src="/media/products/men/jacket/1.webp" alt=""></img>
                    </div>
                    <div className="card-content ">
                    <i className="fas fa-heart primary-col white-trans-bg round f-m wishlist-btn"></i>
                      <i className="sale-tag sale-tag-bg end">
                        SALE
                        <i className="fa-solid fa-tag"></i>
                      </i>
                    </div>
                    <div className="card-content-foot inline">
                        <a href="#" className="btn primary mg-b-s mg-l-s center">
                          <i className="fas fa-shopping-cart mg-r-s"></i>Add to cart
                        </a>
                        <div className="card-content stacked end">
                          <p className="original-price">1599 Rs</p>
                          <p className="sale-price">780 Rs</p>
                        </div>
                    </div>
                    </article>
                    </div>
              </section>
            </section>
          </div>
        <div className="product-layout-side primary" >
              <ul className="list-container" >
                <div className="container">
                  <a className="fw-b">Filters</a>
                  <i className="end">Clear</i>
                </div>
                <p className="fw-b">Price</p>
                <form className="">
                  <div className="input-container  ">
                    <input placeholder=" "  type="radio" name="filter-price" className="input"></input>
                    <label className="f-s">High - Low</label>
                    <input placeholder=" "  type="radio" name="filter-price" className="input"></input>
                    <label className="f-s">Low - High</label>
                  </div>
                </form>
                <p className="fw-b">Categories</p>
                <form className="">
                  <div className="input-container ">
                    <p className="fw-reg">Gender</p>
                    <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
                    <label className="f-s">Women</label>
                    <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
                    <label className="f-s">Men</label>
                  </div>
                  <div className="input-container ">
                    <p className="fw-reg">Apparel</p>
                    <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
                    <label className="f-s">Dress</label>
                    <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
                    <label className="f-s">T-shirts</label>
                    <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
                    <label className="f-s">Jeans</label>
                    <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
                    <label className="f-s">Jackets</label>
                  </div>
                  <div className="input-container ">
                    <p className="fw-reg">Accessories</p>
                    <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
                    <label className="f-s">Shoes</label>
                    <input placeholder=" "  type="checkbox" name="filter-price" className="input"></input>
                    <label className="f-s">Bags</label>
                  </div>
                </form>

                <p className="fw-b">Rating</p>
                <form className="">
                  <div className="container">
                <div id="rating" className="rating-container">
                <span id="rating-first" title="5">☆</span>
                <span id="rating-second" title="4">☆</span>c
                <span id="rating-third" title="3">☆</span>
                <span id="rating-fourth" title="2">☆</span>
                <span id="rating-fifth" title="1">☆</span>
              </div>
            </div>
                </form>
              </ul>
        </div>
      </section>

  );
}
