import React, { useEffect } from "react";
import NavHeader from "../../components/ClientComponent/Header/NavHeader";
import Footer from "../../components/ClientComponent/Footer/Footer";

// <<<<<<< HEAD
import "../../assets/plugins/bootstrap/bootstrap.min.css";
// import "../../Assets/";
import "../../assets/css/style.css";
// =======
// import "../../assets/plugins/bootstrap/bootstrap.min.css";
// import "../../assets/css/animate.min.css";
// import "../../assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css";
// import "../../assets/plugins/kipso-icons/style.css";
// import "../../assets/css/style.css";
// import "../../assets/css/responsive.css";

// import "../../_next/static/css/styles.b100dd23.chunk.css";

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
  "../../assets/plugins/bootstrap/bootstrap.min.css",
  "../../assets/css/animate.min.css",
  "../../assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css",
  "../../assets/plugins/kipso-icons/style.css",
  "../../assets/css/style.css",
  "../../assets/css/responsive.css",
  "../../_next/static/css/styles.b100dd23.chunk.css",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/index.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/_app.js",
  "../../_next/static/runtime/webpack-9369c5c69dbf6d4912cb.js",
  "../../_next/static/chunks/framework.2689030919a9ba0449ff.js",
  "../../_next/static/chunks/commons.ceaf506e42eea69867d7.js",
  "../../_next/static/chunks/styles.6b75174053ded839d11d.js",
  "../../_next/static/runtime/main-2b7f201882d40b0ce780.js",
  "../../_next/static/chunks/a4c92b5b.b8b875e49990b13703a5.js",
  "../../_next/static/chunks/ff73939d68d7e79f1e0f3ade21d95dd400a3a1cc.04a8c86fb488fd8e6f0d.js",
  "../../_next/static/chunks/08afed86d3fa7bd4ded233c88b82f6c63c41e408.cb0e017598de4268103f.js",
  "../../_next/static/chunks/b788f745097c13fe0fb56597fa921221422fea68.b0884a161c5426e4babd.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/index-2.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/index-3.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/about.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/gallery.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/pricing.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/faq.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/courses.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/course-details.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/teachers.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/teacher-details.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/become-teacher.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/news.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/news-details.js",
  "../../_next/static/agIWMwmAuC6_vhQUG9Afp/pages/contact.js",
  "../../_next/static/chunks/a4c92b5b.b8b875e49990b13703a5.js",
  "../../_next/static/chunks/ff73939d68d7e79f1e0f3ade21d95dd400a3a1cc.04a8c86fb488fd8e6f0d.js",
  "../../_next/static/chunks/08afed86d3fa7bd4ded233c88b82f6c63c41e408.cb0e017598de4268103f.js",
  "../../_next/static/chunks/b788f745097c13fe0fb56597fa921221422fea68.b0884a161c5426e4babd.js",
];

function TemplateClient(props) {
  useEffect(() => {
    
    // var i;
    // for(const i in arr){
    //   eval("var_"+ i +" = "+i);
    //     window['value'+i] = + i;
    //     console.log(value`${i}`)
    //   var_`${i}` = document.createElement(`script${i}`);
    //   console.log(var_`${i}` )
    //   [ var_+`_${i}`].src = arr.i;
    //   [ var_+`_${i}`].async = true;
    //   document.body.appendChild( var_+`_${i}`);
    // }

  }, []);

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
