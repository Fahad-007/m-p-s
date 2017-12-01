var app = new Vue({
		    el: '#app',
		    data: {
		        currentSlide: 0,
		        isPreviousSlide: false,
		        isFirstLoad: true,
		        slides: [
		            {
		                headlineFirstLine: "AL",
		                headlineSecondLine: "Fahad",
		                sublineFirstLine: "Abdullah-al-fahad",
		                sublineSecondLine: "Sajib",
		                bgImg: "http://ilovehdwallpapers.com/walls/stylish-hollywood-actor-jared-leto-wide.jpg",
		                rectImg: "https://s27.postimg.org/rgouhim83/slide_rect0.jpg"
		            },
		            {
		                headlineFirstLine: "Nulla",
		                headlineSecondLine: "Auctor",
		                sublineFirstLine: "Il n'y a rien de neuf sous",
		                sublineSecondLine: "le soleil",
		                bgImg: "https://wallpapersite.com/images/pages/pic_w/2817.jpg",
		                rectImg: "https://s27.postimg.org/r00xg9gib/slide_rect1.jpg"
		            },
		            {
		                headlineFirstLine: "Nullam",
		                headlineSecondLine: "Ultricies",
		                sublineFirstLine: "Τίποτα καινούργιο κάτω από",
		                sublineSecondLine: "τον ήλιο",
		                bgImg: "https://wallpapersite.com/images/pages/pic_w/9088.jpg",
		                rectImg: "https://s28.postimg.org/a2i6ateul/slide_rect2.jpg"
		            }
		        ]
		    },
		  mounted: function () {
		    var productRotatorSlide = document.getElementById("app");
		        var startX = 0;
		        var endX = 0;

		        productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

		        productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

		        productRotatorSlide.addEventListener("touchend", function(event) {
		            var threshold = startX - endX;

		            if (threshold < 150 && 0 < this.currentSlide) {
		                this.currentSlide--;
		            }
		            if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
		                this.currentSlide++;
		            }
		        }.bind(this));
		  },
		    methods: {
		        updateSlide(index) {
		            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
		            this.currentSlide = index;
		            this.isFirstLoad = false;
		        }
		    }
		});