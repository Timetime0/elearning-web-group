import React, { useEffect } from "react";
import NavHeader from "../../components/ClientComponent/Header/NavHeader";
import Footer from "../../components/ClientComponent/Footer/Footer";

import "../../assets/plugins/bootstrap/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/plugins/bootstrap/bootstrap.min.css";
import "../../assets/css/animate.min.css";
import "../../assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css";
import "../../assets/plugins/kipso-icons/style.css";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../_next/static/css/styles.b100dd23.chunk.css";



// =======
// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/index.js";
// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/_app.js";
// import "../../_next/static/runtime/webpack-9369c5c69dbf6d4912cb.js";
// import "../../_next/static/chunks/framework.2689030919a9ba0449ff.js";
// import "../../_next/static/chunks/commons.ceaf506e42eea69867d7.js";
// import "../../_next/static/chunks/styles.6b75174053ded839d11d.js";
// import "../../_next/static/runtime/main-2b7f201882d40b0ce780.js";
// import "../../_next/static/chunks/a4c92b5b.b8b875e49990b13703a5.js";
// import "../../_next/static/chunks/ff73939d68d7e79f1e0f3ade21d95dd400a3a1cc.04a8c86fb488fd8e6f0d.js";
// import "../../_next/static/chunks/08afed86d3fa7bd4ded233c88b82f6c63c41e408.cb0e017598de4268103f.js";
// import "../../_next/static/chunks/b788f745097c13fe0fb56597fa921221422fea68.b0884a161c5426e4babd.js";

// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/index-2.js";
// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/index-3.js";
// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/about.js";
// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/gallery.js";
// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/pricing.js";
// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/faq.js";
// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/courses.js";
// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/course-details.js";
// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/teachers.js";
// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/teacher-details.js";
// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/become-teacher.js";
// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/news.js";
// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/news-details.js";
// import "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/contact.js";
// import "../../_next/static/chunks/a4c92b5b.b8b875e49990b13703a5.js";
// import "../../_next/static/chunks/ff73939d68d7e79f1e0f3ade21d95dd400a3a1cc.04a8c86fb488fd8e6f0d.js";
// import "../../_next/static/chunks/08afed86d3fa7bd4ded233c88b82f6c63c41e408.cb0e017598de4268103f.js";
// import "../../_next/static/chunks/b788f745097c13fe0fb56597fa921221422fea68.b0884a161c5426e4babd.js";

const arr = [
 
  // "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/index.js",
  // "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/_app.js",
  // "../../_next/static/runtime/webpack-9369c5c69dbf6d4912cb.js",
  // "../../_next/static/chunks/framework.2689030919a9ba0449ff.js",
  // "../../_next/static/chunks/commons.ceaf506e42eea69867d7.js",
  // "../../_next/static/chunks/styles.6b75174053ded839d11d.js",
  // "../../_next/static/runtime/main-2b7f201882d40b0ce780.js",
  // "../../_next/static/chunks/a4c92b5b.b8b875e49990b13703a5.js",
  // "../../_next/static/chunks/ff73939d68d7e79f1e0f3ade21d95dd400a3a1cc.04a8c86fb488fd8e6f0d.js",
  // "../../_next/static/chunks/08afed86d3fa7bd4ded233c88b82f6c63c41e408.cb0e017598de4268103f.js",
  // "../../_next/static/chunks/b788f745097c13fe0fb56597fa921221422fea68.b0884a161c5426e4babd.js",
  // "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/index-2.js",
  // "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/index-3.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/about.js",
  // "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/gallery.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/pricing.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/faq.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/courses.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/course-details.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/teachers.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/teacher-details.js",
  // "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/become-teacher.js",
  // "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/news.js",
  // "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/news-details.js",
  // "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/contact.js",





  
];


function TemplateClient(props) {
  const createEle=(name,url)=>{
    const script = document.createElement(name);
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
  }

  useEffect(() => {



    // const b123456 = document.createElement("b123456");
    // b123456.src =         "../../_next/static/chunks/b788f745097c13fe0fb56597fa921221422fea68.b0884a161c5426e4babd.js";
    // b123456.async = true;
    // document.body.appendChild(b123456);


    // const a123 = document.createElement("a123");
    // a123.src =         "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/index-2.js";
    // a123.async = true;
    // document.body.appendChild(a123);

    // const a111111 = document.createElement("a111111");
    // a111111.src =         "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/index-3.js";
    // a111111.async = true;
    // document.body.appendChild(a111111);

    // const a11111 = document.createElement("a11111");
    // a11111.src =        "../../_next/static/chunks/08afed86d3fa7bd4ded233c88b82f6c63c41e408.cb0e017598de4268103f.js";
    // a11111.async = true;
    // document.body.appendChild(a11111);


    // const a1111 = document.createElement("a1111");
    // a1111.src =      "../../_next/static/chunks/ff73939d68d7e79f1e0f3ade21d95dd400a3a1cc.04a8c86fb488fd8e6f0d.js";
    // a1111.async = true;
    // document.body.appendChild(a1111);




    // const a111 = document.createElement("a111");
    // a111.src =        "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/gallery.js";
    // a111.async = true;
    // document.body.appendChild(a111);



    // const a11 = document.createElement("a11");
    // a11.src =    "../../_next/static/chunks/styles.6b75174053ded839d11d.js";
    // a11.async = true;
    // document.body.appendChild(a11);



    // const a1 = document.createElement("a1");
    // a1.src =  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/index.js";
    // a1.async = true;
    // document.body.appendChild(a1);

    // const script = document.createElement("script");
    // script.src =  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/_app.js";
    // script.async = true;
    // document.body.appendChild(script);

    // const script1 = document.createElement("script1");
    // script1.src =  "../../_next/static/runtime/webpack-9369c5c69dbf6d4912cb.js";
    // script1.async = true;
    // document.body.appendChild(script1);

    // const a2 = document.createElement("a2");
    // a2.src =  "../../_next/static/chunks/framework.2689030919a9ba0449ff.js";
    // a2.async = true;
    // document.body.appendChild(a2);

    // const a3 = document.createElement("a3");
    // a3.src =  "../../_next/static/chunks/commons.ceaf506e42eea69867d7.js";
    // a3.async = true;
    // document.body.appendChild(a3);

    // const a4 = document.createElement("a4");
    // a4.src =   "../../_next/static/runtime/main-2b7f201882d40b0ce780.js";
    // a4.async = true;
    // document.body.appendChild(a4);

    // const a5 = document.createElement("a5");
    // a5.src =  "../../_next/static/chunks/a4c92b5b.b8b875e49990b13703a5.js";
    // a5.async = true;
    // document.body.appendChild(a5);

    // const aa = document.createElement("aa");
    // aa.src =    "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/become-teacher.js";
    // aa.async = true;
    // document.body.appendChild(aa);
  
    // const bb = document.createElement("bb");
    // bb.src =    "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/news.js";
    // bb.async = true;
    // document.body.appendChild(bb);
  
    // const cc = document.createElement("cc");
    // cc.src =    "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/news-details.js";
    // cc.async = true;
    // document.body.appendChild(cc);
  
    // const dd = document.createElement("dd");
    // dd.src =    "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/contact.js";
    // dd.async = true;
    // document.body.appendChild(dd);


    for (const i in arr) {
      createEle(`script${i}`, arr[i])
    }
  }, [])


  const { Component } = props;
  return (
    <div>
      <header>
        <NavHeader />
      </header>
      <main>
        <Component />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default TemplateClient;
