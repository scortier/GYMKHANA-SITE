const html = document.querySelector("html");
      const progressBar = document.querySelector(".progress-bar");
      const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
      const height = html.offsetHeight;

      const setProgress = () => {
        const scrollTop = window.pageYOffset
          ? window.pageYOffset + html.clientHeight
          : 0;
        const width = Math.round(scrollTop / (height / 100));

        // Show scroll-top button
        scrollToTopBtn.style.opacity = width > 20 ? 1 : 0.15;
        progressBar.style.width = `${width}%`;
      };

      const scrollToTop = duration => {
        const windowYOffset = window.pageYOffset;

        if (duration <= 0) {
          return;
        }

        const perTick = ((0 - windowYOffset) / duration) * 10;

        setTimeout(() => {
          window.scrollTo(0, windowYOffset + perTick);
          if (windowYOffset === 0) return;
          scrollToTop(duration - 10);
        }, 10);
      };

      window.addEventListener("scroll", setProgress);
      scrollToTopBtn.addEventListener("click", () => {
        scrollToTop(600);
      });