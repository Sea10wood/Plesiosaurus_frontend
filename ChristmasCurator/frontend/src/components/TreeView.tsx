import React from "react";
import "../TreeView.css";

const TreeView: React.FC = () => {
  return (
    <html>
      <head>
        <meta
          http-equiv="Content-type"
          content="text/html; charset=Shift_JIS"
        />
        <title>Tree-View</title>
        <link rel="stylesheet" href="css/tree-menu.css" />
        <script src="js/jquery-1.8.3.min.js"></script>
        <script src="js/tree-menu.js"></script>
        <style>
          {`
            #container {
              white-space: nowrap;
            }
            #menu-frame {
              float: left;
              width: 160px;
              height: 600px;
              margin: 0;
              border: 1px solid gray;
              font-family: "Meiryo UI", "メイリオ", "MS UI Gothic", "ヒラギノ角ゴシック";
            }
            #main-frame {
              width: 760px;
              height: 600px;
              margin: 0;
              border: 1px solid gray;
            }
          `}
        </style>
        <base target="main-frame" />
      </head>
      <body>
        <div id="container">
          <div id="menu-frame">
            <ul className="tree-menu">
              <li>
                <a href="#">リンク</a>
                <ul>
                  <li>
                    <a href="#">Web技術</a>
                    <ul>
                      <li>
                        <a href="http://www.tohoho-web.com/html/">root</a>
                        <ul>
                          <li>
                            <a href="http://www.tohoho-web.com/html/a.htm">
                              &lt;Document&gt;
                            </a>
                          </li>
                          <li>
                            <a href="http://www.tohoho-web.com/html/abbr.htm">
                              &lt;Picture&gt;
                            </a>
                          </li>
                          <li>
                            <a href="http://www.tohoho-web.com/html/acronym.htm">
                              &lt;Recent&gt;
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="http://www.tohoho-web.com/js/">Desktop</a>
                        <ul>
                          <li>
                            <a href="http://www.tohoho-web.com/js/layer.htm#above">
                              uzuhouse
                            </a>
                          </li>
                          <li>
                            <a href="http://www.tohoho-web.com/js/math.htm#abs">
                              hackzhackathon
                            </a>
                          </li>
                          <li>
                            <a href="http://www.tohoho-web.com/js/math.htm#acos">
                              Wow
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="http://www.tohoho-web.com/css/">CSS</a>
                        <ul></ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <iframe id="main-frame" name="main-frame"></iframe>
        </div>
      </body>
    </html>
  );
};

export default TreeView;
