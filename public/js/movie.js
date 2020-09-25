import YouTube from "react-youtube";

export default function Movie() {
  if (process.browser) {
    console.log(document.getElementById("movieArea"));
    document.getElementById("movieArea").addEventListener("click", function () {
      let promise = new Promise((resolve, reject) => {
        this.classList.add(styles.fadeout);
        resolve();
      });
      promise.then((msg) => {
        return new Promise((resolve, reject) => {
          this.classList.add(styles.displaynone);
        });
      });
      console.log(this);
      event.target.playVideo();
    });
  }
}
