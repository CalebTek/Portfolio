// /**
//  * Template Name: iPortfolio
//  * Updated: May 30 2023 with Bootstrap v5.3.0
//  * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
//  * Author: BootstrapMade.com
//  * License: https://bootstrapmade.com/license/
//  */
// (function () {
//   "use strict";

//   /**
//    * Easy selector helper function
//    */
//   const select = (el, all = false) => {
//     el = el.trim();
//     if (all) {
//       return [...document.querySelectorAll(el)];
//     } else {
//       return document.querySelector(el);
//     }
//   };

//   /**
//    * Easy event listener function
//    */
//   const on = (type, el, listener, all = false) => {
//     let selectEl = select(el, all);
//     if (selectEl) {
//       if (all) {
//         selectEl.forEach((e) => e.addEventListener(type, listener));
//       } else {
//         selectEl.addEventListener(type, listener);
//       }
//     }
//   };

//   /**
//    * Easy on scroll event listener
//    */
//   const onscroll = (el, listener) => {
//     el.addEventListener("scroll", listener);
//   };

//   /**
//    * Navbar links active state on scroll
//    */
//   let navbarlinks = select("#navbar .scrollto", true);
//   const navbarlinksActive = () => {
//     let position = window.scrollY + 200;
//     navbarlinks.forEach((navbarlink) => {
//       if (!navbarlink.hash) return;
//       let section = select(navbarlink.hash);
//       if (!section) return;
//       if (
//         position >= section.offsetTop &&
//         position <= section.offsetTop + section.offsetHeight
//       ) {
//         navbarlink.classList.add("active");
//       } else {
//         navbarlink.classList.remove("active");
//       }
//     });
//   };
//   window.addEventListener("load", navbarlinksActive);
//   onscroll(document, navbarlinksActive);

//   /**
//    * Scrolls to an element with header offset
//    */
//   const scrollto = (el) => {
//     let elementPos = select(el).offsetTop;
//     window.scrollTo({
//       top: elementPos,
//       behavior: "smooth"
//     });
//   };

//   /**
//    * Back to top button
//    */
//   let backtotop = select(".back-to-top");
//   if (backtotop) {
//     const toggleBacktotop = () => {
//       if (window.scrollY > 100) {
//         backtotop.classList.add("active");
//       } else {
//         backtotop.classList.remove("active");
//       }
//     };
//     window.addEventListener("load", toggleBacktotop);
//     onscroll(document, toggleBacktotop);
//   }

//   /**
//    * Mobile nav toggle
//    */
//   on("click", ".mobile-nav-toggle", function (e) {
//     select("body").classList.toggle("mobile-nav-active");
//     this.classList.toggle("bi-list");
//     this.classList.toggle("bi-x");
//   });

//   /**
//    * Scrool with ofset on links with a class name .scrollto
//    */
//   on(
//     "click",
//     ".scrollto",
//     function (e) {
//       if (select(this.hash)) {
//         e.preventDefault();

//         let body = select("body");
//         if (body.classList.contains("mobile-nav-active")) {
//           body.classList.remove("mobile-nav-active");
//           let navbarToggle = select(".mobile-nav-toggle");
//           navbarToggle.classList.toggle("bi-list");
//           navbarToggle.classList.toggle("bi-x");
//         }
//         scrollto(this.hash);
//       }
//     },
//     true
//   );

//   /**
//    * Scroll with ofset on page load with hash links in the url
//    */
//   window.addEventListener("load", () => {
//     if (window.location.hash) {
//       if (select(window.location.hash)) {
//         scrollto(window.location.hash);
//       }
//     }
//   });

//   /**
//    * Hero type effect
//    */
//   const typed = select(".typed");
//   if (typed) {
//     let typed_strings = typed.getAttribute("data-typed-items");
//     typed_strings = typed_strings.split(",");
//     new Typed(".typed", {
//       strings: typed_strings,
//       loop: true,
//       typeSpeed: 100,
//       backSpeed: 50,
//       backDelay: 2000
//     });
//   }

//   /**
//    * Skills animation
//    */
//   let skilsContent = select(".skills-content");
//   if (skilsContent) {
//     new Waypoint({
//       element: skilsContent,
//       offset: "80%",
//       handler: function (direction) {
//         let progress = select(".progress .progress-bar", true);
//         progress.forEach((el) => {
//           el.style.width = el.getAttribute("aria-valuenow") + "%";
//         });
//       }
//     });
//   }

//   /**
//    * Porfolio isotope and filter
//    */
//   window.addEventListener("load", () => {
//     let portfolioContainer = select(".portfolio-container");
//     if (portfolioContainer) {
//       let portfolioIsotope = new Isotope(portfolioContainer, {
//         itemSelector: ".portfolio-item"
//       });

//       let portfolioFilters = select("#portfolio-flters li", true);

//       on(
//         "click",
//         "#portfolio-flters li",
//         function (e) {
//           e.preventDefault();
//           portfolioFilters.forEach(function (el) {
//             el.classList.remove("filter-active");
//           });
//           this.classList.add("filter-active");

//           portfolioIsotope.arrange({
//             filter: this.getAttribute("data-filter")
//           });
//           portfolioIsotope.on("arrangeComplete", function () {
//             AOS.refresh();
//           });
//         },
//         true
//       );
//     }
//   });

//   /**
//    * Initiate portfolio lightbox
//    */
//   const portfolioLightbox = GLightbox({
//     selector: ".portfolio-lightbox"
//   });

//   /**
//    * Portfolio details slider
//    */
//   new Swiper(".portfolio-details-slider", {
//     speed: 400,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       type: "bullets",
//       clickable: true
//     }
//   });

//   /**
//    * Testimonials slider
//    */
//   new Swiper(".testimonials-slider", {
//     speed: 600,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false
//     },
//     slidesPerView: "auto",
//     pagination: {
//       el: ".swiper-pagination",
//       type: "bullets",
//       clickable: true
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20
//       },

//       1200: {
//         slidesPerView: 3,
//         spaceBetween: 20
//       }
//     }
//   });

//   /**
//    * Animation on scroll
//    */
//   window.addEventListener("load", () => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: true,
//       mirror: false
//     });
//   });

//   /**
//    * Initiate Pure Counter
//    */
//   new PureCounter();
// })();

// // Calculate the number of years (for example, using the current year)
// var currentYear = new Date().getFullYear();
// var startYear = 2020;

// var yearsOfExperience = currentYear - startYear;

// // Update the content of the <span> element
// document.getElementById("years").textContent = yearsOfExperience;

// // display name
// var name = "Olawale Odeyemi";
// document.getElementById("my-name").textContent = name;

// // // portfolio details
// // const projects = {
// //   project1: {
// //     name: "Online Shopping",
// //     category: "Web Application",
// //     client: "Great AFO Enterprise",
// //     date: "01 March, 2020",
// //     url: "https://github.com/CalebTek/Online-Shopping",
// //     description:
// //       "The “Online Shopping” project, represents a web-based application that simulates and demonstrates the concept of online shopping, a popular form of electronic commerce that enables consumers to purchase products or services directly from sellers via the Internet."
// //   },
// //   project2: {
// //     // Define data for project 2
// //   }
// //   // Add data for other projects
// // };

// // $(document).ready(function () {
// //   $(".portfolio-link").click(function (e) {
// //     e.preventDefault();

// //     // Get the project ID from the data-project attribute
// //     const projectID = $(this).data("project");

// //     // // Get the project data from the projects object
// //     // const projectData = projects[projectID];

// //     // // Update the portfolio-details section with the project data
// //     // $("#portfolio-details .project-name").text(projectData.name);
// //     // $("#portfolio-details .project-category").text(projectData.category);
// //     // $("#portfolio-details .project-client").text(projectData.client);
// //     // $("#portfolio-details .project-date").text(projectData.date);
// //     // $("#portfolio-details .project-url").attr("href", projectData.url);
// //     // $("#portfolio-details .project-description").text(projectData.description);

// //     // Example JavaScript code to update project details
// //     const projectData = projects[projectID];

// //     // Update project details
// //     document.getElementById("project-name").textContent = projectData.name;
// //     document.getElementById("project-category").textContent =
// //       projectData.category;
// //     document.getElementById("project-client").textContent = projectData.client;
// //     document.getElementById("project-date").textContent = projectData.date;
// //     document.getElementById("project-url").href = projectData.url;
// //     document.getElementById("project-url").textContent = projectData.url;
// //     document.getElementById("project-description").innerHTML =
// //       projectData.description;
// //   });
// // });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".php-email-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      const data = await response.json();

      if (response.ok) {
        // Successful submission, show success message
        form.querySelector(".sent-message").classList.add("d-block");
        form.reset();
      } else {
        // Error in submission, show error message
        throw new Error(data.error || "Form submission failed.");
      }
    } catch (error) {
      // Handle errors here and display them
      form.querySelector(".error-message").innerHTML = error.message;
      form.querySelector(".error-message").classList.add("d-block");
    }
  });
});
