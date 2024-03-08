export const handleBars = (idTemplate: string, className:string) => {
  const temp = document.getElementById(idTemplate);
  if (temp) {
    const template = Handlebars.compile(temp.innerHTML);
    const data = {
      "ourservices": [{"src": "/images/0.png", "span": "Product Design", "h6": "Digital Product Design"},
                      {"src": "/images/1.png", "span": "Customs Services", "h6": "Branding & Design"},
                      {"src": "/images/2.png", "span": "Product Development", "h6": "Web Development"}],
      "peoplesays":  [{"src": "/images/ceo.jpg", "name": "Leonard Heiser", "position": "CEO"},
                      {"src": "/images/ceo2.jpg", "name": "Leonard Heiser", "position": "CEO"}],
      "scrollimg":   [{"src": "/images/sec1.jpg", "span": "WEB DESIGN", "h5": "Color Integration", "h6": "2023"},
                      {"src": "/images/sec2.jpg", "span": "WEB DESIGN", "h5": "Color Integration", "h6": "2023"},
                      {"src": "/images/sec3.jpg", "span": "WEB DESIGN", "h5": "Color Integration", "h6": "2023"},
                      {"src": "/images/sec4.jpg", "span": "WEB DESIGN", "h5": "Color Integration", "h6": "2023"},
                      {"src": "/images/sec5.jpg", "span": "WEB DESIGN", "h5": "Color Integration", "h6": "2023"},
                      {"src": "/images/06.jpg", "span": "WEB DESIGN", "h5": "Color Integration", "h6": "2023"}],
      "ourblogs":    [{"src": "/images/h1.jpg", "span": "AUGUST 6, 2022", "h5": "Free advertising for your online business."},
                      {"src": "/images/h4.jpg", "span": "AUGUST 6, 2022", "h5": "Business meeting 2023 in San Francisco."}],
      "homedark-light": [ {"p" : "Main Home" , "href": "https://ui-themez.smartinnovates.net/items/geekfolio/dark/home-main.html"},
                        {"p": "Corporate Bussiness" , "href": "https://ui-themez.smartinnovates.net/items/geekfolio/dark/home-corporate.html"},
                        {"p": "Home One Page" , "href": "https://ui-themez.smartinnovates.net/items/geekfolio/dark/home-onepage.html"},
                        {"p": "Digital Agency" , "href": "https://ui-themez.smartinnovates.net/items/geekfolio/dark/home-digital-agency.html"},
                        {"p": "FreeLancer" , "href": "https://ui-themez.smartinnovates.net/items/geekfolio/dark/home-freelancer.html"},
                        {"p": "Maketing Agency" , "href": "https://ui-themez.smartinnovates.net/items/geekfolio/dark/home-marketing-agency.html"},
                        {"p": "Creative Agency" , "href": "https://ui-themez.smartinnovates.net/items/geekfolio/dark/home-creative-agency.html"},
                        {"p": "Startup Bussiness" , "href": "https://ui-themez.smartinnovates.net/items/geekfolio/dark/home-startup.html"},
                        {"p": "Archiecture" , "href": "https://ui-themez.smartinnovates.net/items/geekfolio/dark/home-architecture.html"}],
      "showcase"    : [ {"p": " Parallax Slider" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/dark/showcase-parallax-slider.html"},
                        {"p": " Flame Slider" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/dark/showcase-frame-slider.html"},
                        {"p": " Circle Slider" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/dark/showcase-circle-slider.html"},
                        {"p": " Showcase Carousel" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/dark/showcase-carousel.html"},
                        {"p": " Interactive Links1" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/dark/showcase-interactive-center-horizontal.html"},
                        {"p": " Interactive Links2" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/dark/showcase-interactive-center.html"},
                        {"p": " Vertical Parallax" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/dark/showcase-parallax.html"}],
      "showcaselight":[ {"p": " Parallax Slider" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-parallax-slider.html"},
                        {"p": " Showcase Carousel" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-frame-slider.html"},
                        {"p": " Interactive Links1" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-interactive-center-horizontal.html"},
                        {"p": " Interactive Links2" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-interactive-center.html"},
                        {"p": " Vertical Parallax" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-parallax.html"}],
      "page":         [ {"p": " About" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-parallax-slider.html"},
                        {"p": " Service" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-frame-slider.html"},
                        {"p": "Out Team" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-interactive-center-horizontal.html"},
                        {"p": " Contact us" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-interactive-center.html"},           
                      ],
      "porfolio":     [ {"p": " Portfolio Metro" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-parallax-slider.html"},
                        {"p": " Modern Grid" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-frame-slider.html"},
                        {"p": "Project Details 1" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-interactive-center-horizontal.html"},
                        {"p": " Project Details 2" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-interactive-center.html"},           
                      ],
      "blog":         [ {"p": " Blog Standert" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-parallax-slider.html"},
                        {"p": " Block List" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-frame-slider.html"},
                        {"p": "Image Out Frame" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-interactive-center-horizontal.html"},
                        {"p": "Blog Detail" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-interactive-center.html"},           
                      ],
      "shop":         [ {"p": " Shop List" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-parallax-slider.html"},
                        {"p": "Single Product  " , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-frame-slider.html"},
                        {"p": "Cart" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-interactive-center-horizontal.html"},
                        {"p": "Check Out" , "href":"https://ui-themez.smartinnovates.net/items/geekfolio/light/showcase-interactive-center.html"},           
                      ],
      "infiniteRotate": [{"h4":"UI-UX Experience"},
                          {"h4":"Web Development"},
                          {"h4":"Digital Marketing"},
                          {"h4":"Product Design"},
                          {"h4":"Mobile Solutions"},
                        ],
      "classicGrid": [{"href": "https://ui-themez.smartinnovates.net/items/geekfolio/light/portfolio-grid-2.html", "p": "Grid 2 Columns"},
                      {"href": "https://ui-themez.smartinnovates.net/items/geekfolio/light/portfolio-grid-3.html", "p": "Grid 3 Columns"},
                      {"href": "https://ui-themez.smartinnovates.net/items/geekfolio/light/portfolio-grid-4.html", "p": "Grid 4 Columns"}
                    ] ,
      "mansory":    [ {"href": "https://ui-themez.smartinnovates.net/items/geekfolio/light/portfolio-masonry-2.html", "p": "Mansory 2 Columns"},
                      {"href": "https://ui-themez.smartinnovates.net/items/geekfolio/light/portfolio-masonry-3.html", "p": "Mansory 3 Columns"},
                      {"href": "https://ui-themez.smartinnovates.net/items/geekfolio/light/portfolio-masonry-4.html", "p": "Mansory 4 Columns"}
                    ],
      "services": [ {"stt": "01", "name": "UI/UX Design"}, 
                    {"stt": "02", "name": "Branding"}, 
                    {"stt": "03", "name": "Development"}, 
                    {"stt": "04", "name": "Marketing"},
                  ]

    };
    var elements =  document.querySelectorAll(className)
    elements.forEach(function(element) {
      element.innerHTML = template(data);
    });
  }
}

handleBars('template-ourservices', '.ourservices');
handleBars('template-peoplesays', '.peoplesays');
handleBars('template-scrollimg', '.scrollimg');
handleBars('template-ourblogs', '.ourblogs');
handleBars('template-homedark-light','.homedark-light');
handleBars('template-showcase','.showcase');
handleBars('template-showcaselight','.showcaselight');
handleBars('template-page','.page');
handleBars('template-porfolio','.porfolio');
handleBars('template-blog','.blog');
handleBars('template-shop','.shop');
handleBars('template-infiniteRotate','.infiniteRotate');
handleBars('template-classicGrid', ".classicGrid");
handleBars('template-mansory', '.mansory');
handleBars('template-stars', '.stars');
handleBars('template-services', '.services');
