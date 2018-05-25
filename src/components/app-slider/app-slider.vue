<template>
    <div class="slide_box">
        <div class="slide" ref="slider">
            <div class="slide-group" ref='slideGroup'>
                <slot>
                </slot>
            </div>
            <div class="dots">
                <span class="dot" :key="index" :class="{dotActive: (currentPageIndex) === index }" v-for="(item, index) in dots"></span>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "app-slider",
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      dots: [],
      currentPageIndex: 0
    };
  },
  mounted() {
    this.setSliderWidth(); //设置轮播图的宽度
    this.init();
    if (this.autoPlay) {
      this.play();
    }
  },
  methods: {
    setSliderWidth() {
      this.children = this.$refs.slideGroup.children;
      this.dots = new Array(this.children.length);
      let width = 0;
      let sliderWidth = this.$refs.slider.clientWidth;
      for (let i = 0; i < this.children.length; i++) {
        width += sliderWidth;
      }
      if (this.loop) {
        width += 2 * sliderWidth;
      }
      this.$refs.slideGroup.style.width = width + "px";
    },
    init() {
      var vm = this;
      // 实例化scroll
      this.scroll = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false, //关闭或者打开惯性运动的执行
        
        
       
       
        click: true,
  
   
  snap: {
loop: true,
    threshold: 0.3,
    speed: 400
  },
      });
      this.scroll.on("scrollEnd", () => {
        let pageIndex = this.scroll.getCurrentPage().pageX;
        if (this.loop) {
          pageIndex -= 1;
        }
        this.currentPageIndex = pageIndex;
        if (vm.autoPlay) {
          vm.play();
        }
      });
      this.scroll.on("beforeScrollStart", () => {
        if (vm.autoPlay) {
          clearTimeout(vm.timer);
        }
      });
    },
    play() {
      let pageIndex = this.currentPageIndex + 1;
      if (this.loop) {
        pageIndex += 1;
      }
      var vm = this;
      this.timer = setTimeout(() => {
        vm.scroll.goToPage(pageIndex, 0, 400); //跳转到的页数 初始化页数 滑动总时间
      }, vm.interval);
    }
  }
};
</script>
<style lang='scss' scoped>
.slide {
  width: 100%;
  overflow: hidden;
  height: 280px;
  position: relative;
}
.slide-group {
  height: 280px;
  // background: #ff0;
  .slider-item {
    width: 100vw;
    height: 280px;

    // background: yellowgreen;
    float: left;
    &:nth-type-of(1) {
      // background: red;
    }
  }
}
.dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  text-align: center;
  .dot {
    background-color: #ffffff;
    display: inline-block;
    margin: 0 4px;
    width: 22px;
    height: 5px;
    border-radius: 50%;
    &.dotActive {
      width: 20px;
      border-radius: 5px;
      background-color: #2dbb55;
    }
  }
}
</style>