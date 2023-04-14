import Link from "next/link";
import Layouts from "../src/layouts/Layouts";
const blog = () => {
  return (
    <Layouts bodyCls={"dark blog"} extraPage>
      <div className="wrapper">
        <div className="container-fluid page-title">
          <div className="content-banner">
            <h2 className="text-center">
              <span>Blog </span>
              <span>Posts</span>
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="content">
              {/* Article Starts */}
              <article>
                <a href="blog-post.html">
                  <h4>How to be a successful freelancer</h4>
                </a>
                {/* Figure Starts */}
                <figure className="blog-figure">
                  <a href="blog-post.html">
                    <img
                      className="responsive-img"
                      src="img/blog/blog-post-1.jpg"
                      alt=""
                    />
                  </a>
                </figure>
                {/* Figure Ends */}
                {/* Excerpt Starts */}
                <div className="blog-excerpt">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit massa vel mauris Lorem ipsum dolor sit amet Lorem
                    ipsum dol sit amet Lorem ipsum dol or sit amet, consectetur
                    adipiscing elit. Sed blandit massa vel mauris Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Sed blandit
                    massa vel mauris ...
                  </p>
                  <Link href="/blog-post">
                    <a className="btn readmore">
                      <span>Read more</span>
                    </a>
                  </Link>
                  {/* Meta Starts */}
                  <div className="meta">
                    <span>
                      <i className="fa fa-user" /> <a href="#">admin</a>
                    </span>
                    <span className="date">
                      <i className="fa fa-calendar" /> 9 January 2017
                    </span>
                    <span>
                      <i className="fa fa-commenting" />{" "}
                      <a href="blog-post.html">18</a>
                    </span>
                    <span>
                      <i className="fa fa-tags" /> js, php, html
                    </span>
                    <span className="permalink">
                      <i className="fa fa-link" />{" "}
                      <a href="blog-post.html">permalink</a>
                    </span>
                  </div>
                  {/* Meta Ends */}
                </div>
                {/* Excerpt Ends */}
              </article>
              {/* Article Ends */}
              {/* Article Starts */}
              <article>
                <a href="blog-post.html">
                  <h4>Collaborating with envato</h4>
                </a>
                {/* Figure Starts */}
                <figure className="blog-figure">
                  <a href="blog-post.html">
                    <img
                      className="responsive-img"
                      src="img/blog/blog-post-2.jpg"
                      alt=""
                    />
                  </a>
                </figure>
                {/* Figure Ends */}
                {/* Excerpt Starts */}
                <div className="blog-excerpt">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit massa vel mauris Lorem ipsum dolor sit amet Lorem
                    ipsum dol sit amet Lorem ipsum dol or sit amet, consectetur
                    adipiscing elit. Sed blandit massa vel mauris Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Sed blandit
                    massa vel mauris ...
                  </p>
                  <Link href="/blog-post">
                    <a className="btn readmore">
                      <span>Read more</span>
                    </a>
                  </Link>
                  {/* Meta Starts */}
                  <div className="meta">
                    <span>
                      <i className="fa fa-user" /> <a href="#">admin</a>
                    </span>
                    <span className="date">
                      <i className="fa fa-calendar" /> 9 January 2017
                    </span>
                    <span>
                      <i className="fa fa-commenting" />{" "}
                      <a href="blog-post.html">18</a>
                    </span>
                    <span>
                      <i className="fa fa-tags" /> js, php, html
                    </span>
                    <span className="permalink">
                      <i className="fa fa-link" />{" "}
                      <a href="blog-post.html">permalink</a>
                    </span>
                  </div>
                  {/* Meta Ends */}
                </div>
                {/* Excerpt Ends */}
              </article>
              {/* Article Ends */}
              {/* Article Starts */}
              <article>
                <a href="blog-post.html">
                  <h4>Why Themeforest is the best</h4>
                </a>
                {/* Figure Starts */}
                <figure className="blog-figure">
                  <a href="blog-post.html">
                    <img
                      className="responsive-img"
                      src="img/blog/blog-post-3.jpg"
                      alt=""
                    />
                  </a>
                </figure>
                {/* Figure Ends */}
                {/* Excerpt Starts */}
                <div className="blog-excerpt">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit massa vel mauris Lorem ipsum dolor sit amet Lorem
                    ipsum dol sit amet Lorem ipsum dol or sit amet, consectetur
                    adipiscing elit. Sed blandit massa vel mauris Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Sed blandit
                    massa vel mauris ...
                  </p>
                  <Link href="/blog-post">
                    <a className="btn readmore">
                      <span>Read more</span>
                    </a>
                  </Link>
                  {/* Meta Starts */}
                  <div className="meta">
                    <span>
                      <i className="fa fa-user" /> <a href="#">admin</a>
                    </span>
                    <span className="date">
                      <i className="fa fa-calendar" /> 9 January 2017
                    </span>
                    <span>
                      <i className="fa fa-commenting" />{" "}
                      <a href="blog-post.html">18</a>
                    </span>
                    <span>
                      <i className="fa fa-tags" /> js, php, html
                    </span>
                    <span className="permalink">
                      <i className="fa fa-link" />{" "}
                      <a href="blog-post.html">permalink</a>
                    </span>
                  </div>
                  {/* Meta Ends */}
                </div>
                {/* Excerpt Ends */}
              </article>
              {/* Article Ends */}
              <div className="col-12 mx-auto text-center">
                <a href="#" className="btn btn-secondary refresh">
                  <span>
                    <i className="fa fa-refresh" />
                    load more
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default blog;
