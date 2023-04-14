import Layouts from "../src/layouts/Layouts";
const BlogPost = () => {
  return (
    <Layouts extraPage bodyCls={"dark blog"}>
      <div className="wrapper">
        <div className="container-fluid page-title post-title">
          <div className="content-banner">
            <h2 className="text-center">
              <span>how to be a successful freelancer</span>
            </h2>
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
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="content">
              {/* Article Starts */}
              <article>
                {/* Excerpt Starts */}
                <div className="blog-excerpt">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                  {/* Meta Starts */}
                  <div className="meta meta-post-content">
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
                {/* Comments Starts */}
                <div className="comments">
                  <h3 className="comments-heading uppercase">3 Comments</h3>
                  <ul className="comments-list">
                    <li>
                      {/* Comment Starts */}
                      <div className="comment">
                        <img
                          className="comment-avatar pull-left"
                          alt=""
                          src="img/blog/user1.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">
                              Dalel Boubaker
                            </span>
                            <span className="comment-date pull-right">
                              January 17, 2017
                            </span>
                          </div>
                          <div className="comment-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehen.
                            </p>
                          </div>
                          <div>
                            <a className="comment-reply" href="#">
                              Reply
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Comment Ends */}
                      <ul className="comments-reply">
                        <li>
                          {/* Comment Starts */}
                          <div className="comment">
                            <img
                              className="comment-avatar pull-left"
                              alt=""
                              src="img/blog/user2.jpg"
                            />
                            <div className="comment-body">
                              <div className="meta-data">
                                <span className="comment-author">
                                  Lina Marzouki
                                </span>
                                <span className="comment-date pull-right">
                                  January 17, 2017
                                </span>
                              </div>
                              <div className="comment-content">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat. Duis aute irure dolor
                                  in reprehen.
                                </p>
                              </div>
                              <div>
                                <a className="comment-reply" href="#">
                                  Reply
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* Comment Ends */}
                        </li>
                      </ul>
                      {/* Comment Starts */}
                      <div className="comment last">
                        <img
                          className="comment-avatar pull-left"
                          alt=""
                          src="img/blog/user3.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">Slim Hamdi</span>
                            <span className="comment-date pull-right">
                              January 17, 2017
                            </span>
                          </div>
                          <div className="comment-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehen.
                            </p>
                          </div>
                          <div>
                            <a className="comment-reply" href="#">
                              Reply
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Comment Ends */}
                    </li>
                  </ul>
                  <h3 className="comments-heading uppercase add-comment">
                    Add a comment
                  </h3>
                  {/* Comments Form Starts */}
                  <div className="comments-form">
                    <form role="form">
                      {/* Name Field Starts */}
                      <div className="form-group col-12">
                        <i className="fa fa-user prefix" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="YOUR NAME"
                          required=""
                        />
                      </div>
                      {/* Name Field Ends */}
                      {/* Email Field Starts */}
                      <div className="form-group col-12">
                        <i className="fa fa-envelope prefix" />
                        <input
                          id="email"
                          name="email"
                          type="text"
                          className="form-control"
                          placeholder="YOUR EMAIL"
                          required=""
                        />
                      </div>
                      {/* Email Field Ends */}
                      {/* Comment Textarea Starts */}
                      <div className="form-group col-xl-12">
                        <i className="fa fa-comments prefix" />
                        <textarea
                          id="comment"
                          name="comment"
                          className="form-control"
                          placeholder="YOUR COMMENT"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                      {/* Comment Textarea Ends */}
                      {/* Submit Form Button Starts */}
                      <div className="col s12 m12 l6 xl6 submit-form">
                        <button
                          className="btn button-animated"
                          type="submit"
                          name="send"
                        >
                          <span>
                            <i className="fa fa-comment" /> Add comment
                          </span>
                        </button>
                      </div>
                      {/* Submit Form Button Ends */}
                    </form>
                  </div>
                  {/* Comments Form Ends */}
                </div>
              </article>
              {/* Article Ends */}
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default BlogPost;
