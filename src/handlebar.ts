export const handleBars = (idTemplate: string, idDiv:string) => {
    const temp = document.getElementById(idTemplate);
    if (temp) {
      const template = Handlebars.compile(temp.innerHTML);
      const data = {
        "ourservices":  [ {"src": "/images/0.png", "span": "Product Design", "h6": "Digital Product Design"},
                          {"src": "/images/1.png", "span": "Customs Services", "h6": "Branding & Design"},
                          {"src": "/images/2.png", "span": "Product Development", "h6": "Web Development"}
                        ],
        "peoplesays" :  [ {"src": "/images/ceo.jpg", "name": "Leonard Heiser", "position": "CEO"},
                          {"src": "/images/ceo2.jpg", "name": "Leonard Heiser", "position": "CEO"},
                        ],
      };
      document.getElementById(idDiv)!.innerHTML = template(data);
    }
}

handleBars('template-1', 'ourservices');
handleBars('template-2', 'peoplesays');